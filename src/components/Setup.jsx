import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import {
  categoryFileName,
  customCategoryToCsv,
  parseCategoryFiles,
  parseCustomCategories,
  pickRandomEntryExcluding,
} from '../utils.js';
import { formatString, getStrings } from '../i18n.js';

const categoryFilesByLanguage = {
  es: import.meta.glob('../data/categories/es/*.csv', {
    as: 'raw',
    eager: true,
  }),
  en: import.meta.glob('../data/categories/en/*.csv', {
    as: 'raw',
    eager: true,
  }),
};

const getCategoryIcon = (category, icons) => icons[category] || '🏷️';

const createCustomCategoryDraft = (language) => ({
  id: `custom-${Date.now()}`,
  language,
  name: '',
  icon: '✨',
  rows: [
    { word: '', hint: '' },
    { word: '', hint: '' },
    { word: '', hint: '' },
  ],
});

const Setup = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const [errors, setErrors] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [draggedPlayerIndex, setDraggedPlayerIndex] = useState(null);
  const [customDraft, setCustomDraft] = useState(null);
  const [customErrors, setCustomErrors] = useState([]);
  const dragIndexRef = useRef(null);
  const dragCleanupRef = useRef(null);
  const steps = useMemo(
    () => [
      { id: 'players', label: t.setup.steps.players },
      { id: 'mode', label: t.setup.steps.mode },
      { id: 'categories', label: t.setup.steps.categories },
    ],
    [t]
  );

  const categoryFiles = categoryFilesByLanguage[state.language] || categoryFilesByLanguage.es;
  const parsedFileCategories = useMemo(
    () => parseCategoryFiles(categoryFiles),
    [categoryFiles]
  );
  const parsedCustomCategories = useMemo(
    () => parseCustomCategories(state.customCategories, state.language),
    [state.customCategories, state.language]
  );
  const wordEntries = useMemo(
    () => [...parsedFileCategories.entries, ...parsedCustomCategories.entries],
    [parsedCustomCategories.entries, parsedFileCategories.entries]
  );
  const categories = useMemo(
    () =>
      Array.from(
        new Set([...parsedFileCategories.categories, ...parsedCustomCategories.categories])
      ).sort((a, b) => a.localeCompare(b, state.language)),
    [parsedCustomCategories.categories, parsedFileCategories.categories, state.language]
  );
  const icons = useMemo(
    () => ({ ...parsedFileCategories.icons, ...parsedCustomCategories.icons }),
    [parsedCustomCategories.icons, parsedFileCategories.icons]
  );
  const customCategoriesForLanguage = useMemo(
    () => state.customCategories.filter((category) => category.language === state.language),
    [state.customCategories, state.language]
  );
  const editingCustomCategory = customDraft
    ? state.customCategories.find((category) => category.id === customDraft.id)
    : null;
  const selectedCategories = useMemo(
    () => state.selectedCategories.filter((category) => categories.includes(category)),
    [categories, state.selectedCategories]
  );
  const filteredEntries = useMemo(() => {
    if (state.categoryMode !== 'custom') {
      return wordEntries;
    }
    if (!selectedCategories.length) {
      return [];
    }
    return wordEntries.filter((entry) => selectedCategories.includes(entry.category));
  }, [selectedCategories, state.categoryMode, wordEntries]);
  const selectedCount =
    state.categoryMode === 'custom' ? selectedCategories.length : categories.length;
  const availableWordsCount =
    state.categoryMode === 'custom' ? filteredEntries.length : wordEntries.length;

  const currentStep = steps[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  const onResetAll = () => {
    setErrors([]);
    dispatch({ type: 'RESET_ALL' });
  };

  const onSetCategoryMode = (mode) => {
    if (mode === 'all') {
      dispatch({ type: 'SET_CATEGORY_MODE', payload: 'all' });
      return;
    }
    if (!selectedCategories.length && categories.length) {
      dispatch({ type: 'SET_SELECTED_CATEGORIES', payload: categories });
    }
    dispatch({ type: 'SET_CATEGORY_MODE', payload: 'custom' });
  };

  const onToggleCategory = (category) => {
    const next = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    dispatch({ type: 'SET_SELECTED_CATEGORIES', payload: next });
  };

  const onStartCustomCategory = () => {
    setErrors([]);
    setCustomErrors([]);
    setCustomDraft(createCustomCategoryDraft(state.language));
  };

  const onEditCustomCategory = (category) => {
    setErrors([]);
    setCustomErrors([]);
    setCustomDraft({
      ...category,
      rows: category.rows.length ? category.rows : [{ word: '', hint: '' }],
    });
  };

  const onUpdateCustomRow = (index, field, value) => {
    setCustomDraft((current) => {
      if (!current) return current;
      const rows = [...current.rows];
      rows[index] = { ...rows[index], [field]: value };
      return { ...current, rows };
    });
  };

  const onAddCustomRow = () => {
    setCustomDraft((current) =>
      current ? { ...current, rows: [...current.rows, { word: '', hint: '' }] } : current
    );
  };

  const onRemoveCustomRow = (index) => {
    setCustomDraft((current) => {
      if (!current) return current;
      const rows = current.rows.filter((_, rowIndex) => rowIndex !== index);
      return { ...current, rows: rows.length ? rows : [{ word: '', hint: '' }] };
    });
  };

  const onSaveCustomCategory = () => {
    if (!customDraft) return;
    const rows = customDraft.rows
      .map((row) => ({ word: row.word.trim(), hint: row.hint.trim() }))
      .filter((row) => row.word);
    const nextErrors = [];
    if (!customDraft.name.trim()) {
      nextErrors.push(t.setup.errors.customCategoryName);
    }
    if (!rows.length) {
      nextErrors.push(t.setup.errors.customCategoryWords);
    }
    setCustomErrors(nextErrors);
    if (nextErrors.length) return;
    dispatch({
      type: 'SAVE_CUSTOM_CATEGORY',
      payload: {
        ...customDraft,
        language: state.language,
        name: customDraft.name.trim(),
        icon: customDraft.icon.trim() || '✨',
        rows,
      },
    });
    setCustomDraft(null);
  };

  const onExportCustomCategory = (category) => {
    const blob = new Blob([customCategoryToCsv(category)], {
      type: 'text/csv;charset=utf-8',
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = categoryFileName(category.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const onDeleteCustomCategory = (category) => {
    const confirmed = window.confirm(
      formatString(t.setup.deleteCustomCategoryConfirm, { name: category.name })
    );
    if (confirmed) {
      dispatch({ type: 'DELETE_CUSTOM_CATEGORY', payload: category.id });
      if (customDraft?.id === category.id) {
        setCustomDraft(null);
        setCustomErrors([]);
      }
    }
  };

  const onStart = () => {
    const nextErrors = [];
    if (state.playerCount < 3 || state.playerCount > 15) {
      nextErrors.push(t.setup.errors.players);
    }

    if (!wordEntries.length) {
      nextErrors.push(t.setup.errors.words);
    }

    if (state.categoryMode === 'custom') {
      if (!selectedCategories.length) {
        nextErrors.push(t.setup.errors.categories);
      } else if (!filteredEntries.length) {
        nextErrors.push(t.setup.errors.noWords);
      }
    }

    const emptyNames = state.players.filter((player) => !player.name.trim());
    if (emptyNames.length) {
      nextErrors.push(t.setup.errors.names);
    }

    setErrors(nextErrors);
    if (nextErrors.length === 0) {
      const entry = pickRandomEntryExcluding(
        filteredEntries.length ? filteredEntries : wordEntries,
        state.recentWords
      );
      dispatch({
        type: 'START_GAME',
        payload: { word: entry.word, wordHint: entry.hint },
      });
    }
  };

  const onNext = () => {
    setErrors([]);
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  };

  const onPrev = () => {
    setErrors([]);
    setStepIndex((index) => Math.max(index - 1, 0));
  };

  const stopPlayerDrag = () => {
    dragIndexRef.current = null;
    setDraggedPlayerIndex(null);
    if (dragCleanupRef.current) {
      dragCleanupRef.current();
      dragCleanupRef.current = null;
    }
  };

  useEffect(
    () => () => {
      dragCleanupRef.current?.();
      dragIndexRef.current = null;
    },
    []
  );

  const onPlayerDragStart = (event, index) => {
    if (event.button !== 0) return;
    event.preventDefault();
    dragCleanupRef.current?.();
    dragIndexRef.current = index;
    setDraggedPlayerIndex(index);

    const movePlayer = (targetIndex) => {
      const from = dragIndexRef.current;
      if (!Number.isInteger(from) || targetIndex === from) return;
      dispatch({ type: 'REORDER_PLAYER', payload: { from, to: targetIndex } });
      dragIndexRef.current = targetIndex;
      setDraggedPlayerIndex(targetIndex);
    };

    const onPointerMove = (moveEvent) => {
      const target = document.elementFromPoint(moveEvent.clientX, moveEvent.clientY);
      const row = target?.closest?.('[data-player-index]');
      if (!row) return;
      const targetIndex = Number(row.dataset.playerIndex);
      if (Number.isInteger(targetIndex)) {
        movePlayer(targetIndex);
      }
    };

    const onPointerUp = () => {
      stopPlayerDrag();
    };

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp, { once: true });
    document.addEventListener('pointercancel', onPointerUp, { once: true });
    dragCleanupRef.current = () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('pointercancel', onPointerUp);
    };
  };

  const onPlayerHandleKeyDown = (event, index) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    const direction = event.key === 'ArrowUp' ? -1 : 1;
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= state.players.length) return;
    dispatch({ type: 'REORDER_PLAYER', payload: { from: index, to: targetIndex } });
    window.requestAnimationFrame(() => {
      document.querySelector(`[data-player-handle-index="${targetIndex}"]`)?.focus();
    });
  };

  return (
    <section className="screen">
      <div className="setup-shell">
        <div
          className="setup-progress"
          role="tablist"
          aria-label={t.setup.progressLabel}
          style={{ '--progress': steps.length > 1 ? stepIndex / (steps.length - 1) : 0 }}
        >
          <div className="progress-track" aria-hidden="true" />
          {steps.map((step, index) => {
            const isActive = index === stepIndex;
            const isComplete = index < stepIndex;
            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'step' : undefined}
                className={`progress-step${isActive ? ' progress-step--active' : ''}${
                  isComplete ? ' progress-step--complete' : ''
                }`}
                onClick={() => {
                  setErrors([]);
                  setStepIndex(index);
                }}
              >
                <span className="progress-dot" aria-hidden="true" />
                <span className="progress-label">{step.label}</span>
              </button>
            );
          })}
        </div>
        <div className="card">
          <h2>{t.setup.title}</h2>
          <p className="muted">{t.setup.subtitle}</p>

          {currentStep.id === 'players' && (
            <>
              <div className="field">
                <label htmlFor="playerCount">{t.setup.playerCount}</label>
                <div className="stepper">
                  <button
                    type="button"
                    className="stepper__button"
                    onClick={() =>
                      dispatch({ type: 'SET_PLAYER_COUNT', payload: state.playerCount - 1 })
                    }
                    aria-label={t.setup.decreasePlayers}
                  >
                    ▾
                  </button>
                  <input
                    id="playerCount"
                    className="stepper__input"
                    type="number"
                    min={3}
                    max={15}
                    value={state.playerCount}
                    onChange={(event) =>
                      dispatch({
                        type: 'SET_PLAYER_COUNT',
                        payload: Number(event.target.value),
                      })
                    }
                  />
                  <button
                    type="button"
                    className="stepper__button"
                    onClick={() =>
                      dispatch({ type: 'SET_PLAYER_COUNT', payload: state.playerCount + 1 })
                    }
                    aria-label={t.setup.increasePlayers}
                  >
                    ▴
                  </button>
                </div>
              </div>
              <div className="field">
                <label>{t.setup.players}</label>
                <span className="helper">{t.setup.reorderPlayers}</span>
                <div className="stack">
                  {state.players.map((player, index) => (
                    <div
                      key={index}
                      className={`player-row${
                        draggedPlayerIndex === index ? ' player-row--dragging' : ''
                      }`}
                      data-player-index={index}
                    >
                      <button
                        type="button"
                        className="drag-handle"
                        data-player-handle-index={index}
                        onPointerDown={(event) => onPlayerDragStart(event, index)}
                        onKeyDown={(event) => onPlayerHandleKeyDown(event, index)}
                        aria-label={formatString(t.setup.reorderPlayer, {
                          name: player.name || `${t.common.playerLabel} ${index + 1}`,
                        })}
                      >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                      </button>
                      <div className="player-name">
                        <span
                          className="color-dot"
                          style={{ '--player-color': player.color }}
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          placeholder={`${t.common.playerLabel} ${index + 1}`}
                          value={player.name}
                          onChange={(event) =>
                            dispatch({
                              type: 'SET_PLAYER_NAME',
                              payload: { index, name: event.target.value },
                            })
                          }
                        />
                      </div>
                      <input
                        type="color"
                        className="color-input"
                        value={player.color}
                        onChange={(event) =>
                          dispatch({
                            type: 'SET_PLAYER_COLOR',
                            payload: { index, color: event.target.value },
                          })
                        }
                        aria-label={`${t.common.colorOf} ${
                          player.name || `${t.common.playerLabel} ${index + 1}`
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentStep.id === 'mode' && (
            <>
              <div className="field">
                <label>{t.setup.mode}</label>
                <div className="toggle">
                  <button
                    type="button"
                    className={state.gameMode === 'word' ? 'chip chip--active' : 'chip'}
                    onClick={() => dispatch({ type: 'SET_GAME_MODE', payload: 'word' })}
                  >
                    {t.setup.wordMode}
                  </button>
                  <button
                    type="button"
                    className={state.gameMode === 'draw' ? 'chip chip--active' : 'chip'}
                    onClick={() => dispatch({ type: 'SET_GAME_MODE', payload: 'draw' })}
                  >
                    {t.setup.drawMode}
                  </button>
                </div>
                <span className="helper">{t.setup.drawHelper}</span>
              </div>
              {state.gameMode === 'draw' && (
                <div className="field">
                  <label>{t.setup.drawOptions}</label>
                  <div className="stack">
                    <div>
                      <span className="helper">{t.setup.strokesPerRound}</span>
                      <div className="toggle">
                        <button
                          type="button"
                          className={state.drawLimitStrokes ? 'chip chip--active' : 'chip'}
                          onClick={() =>
                            dispatch({ type: 'SET_DRAW_LIMIT_STROKES', payload: true })
                          }
                        >
                          {t.setup.oneStroke}
                        </button>
                        <button
                          type="button"
                          className={!state.drawLimitStrokes ? 'chip chip--active' : 'chip'}
                          onClick={() =>
                            dispatch({ type: 'SET_DRAW_LIMIT_STROKES', payload: false })
                          }
                        >
                          {t.setup.noLimit}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="field">
                <label>{t.setup.impostors}</label>
                <div className="toggle">
                  <button
                    type="button"
                    className={!state.allowMultipleImpostors ? 'chip chip--active' : 'chip'}
                    onClick={() =>
                      dispatch({ type: 'SET_ALLOW_MULTIPLE_IMPOSTORS', payload: false })
                    }
                  >
                    {t.setup.oneImpostor}
                  </button>
                  <button
                    type="button"
                    className={state.allowMultipleImpostors ? 'chip chip--active' : 'chip'}
                    onClick={() =>
                      dispatch({ type: 'SET_ALLOW_MULTIPLE_IMPOSTORS', payload: true })
                    }
                  >
                    {t.setup.manyImpostors}
                  </button>
                </div>
                <span className="helper">{t.setup.impostorHelper}</span>
              </div>
              {state.allowMultipleImpostors && (
                <div className="field field--danger">
                  <label>{t.setup.impostorCountMode}</label>
                  <div className="toggle">
                    <button
                      type="button"
                      className={
                        state.impostorCountMode !== 'random' ? 'chip chip--active' : 'chip'
                      }
                      onClick={() =>
                        dispatch({ type: 'SET_IMPOSTOR_COUNT_MODE', payload: 'fixed' })
                      }
                    >
                      {t.setup.fixedImpostors}
                    </button>
                    <button
                      type="button"
                      className={
                        state.impostorCountMode === 'random' ? 'chip chip--active' : 'chip'
                      }
                      onClick={() =>
                        dispatch({ type: 'SET_IMPOSTOR_COUNT_MODE', payload: 'random' })
                      }
                    >
                      {t.setup.randomImpostors}
                    </button>
                  </div>
                  {state.impostorCountMode === 'random' ? (
                    <span className="helper">
                      {formatString(t.setup.randomImpostorsHelper, {
                        count: state.playerCount,
                      })}
                    </span>
                  ) : (
                    <>
                      <label htmlFor="impostorCount">{t.setup.impostorCount}</label>
                      <div className="stepper">
                        <button
                          type="button"
                          className="stepper__button"
                          onClick={() =>
                            dispatch({
                              type: 'SET_IMPOSTOR_COUNT',
                              payload: state.impostorCount - 1,
                            })
                          }
                          aria-label={t.setup.decreaseImpostors}
                        >
                          ▾
                        </button>
                        <input
                          id="impostorCount"
                          className="stepper__input"
                          type="number"
                          min={1}
                          max={state.playerCount}
                          value={state.impostorCount}
                          onChange={(event) =>
                            dispatch({
                              type: 'SET_IMPOSTOR_COUNT',
                              payload: Number(event.target.value),
                            })
                          }
                        />
                        <button
                          type="button"
                          className="stepper__button"
                          onClick={() =>
                            dispatch({
                              type: 'SET_IMPOSTOR_COUNT',
                              payload: state.impostorCount + 1,
                            })
                          }
                          aria-label={t.setup.increaseImpostors}
                        >
                          ▴
                        </button>
                      </div>
                      <span className="helper">{t.setup.multipleImpostors}</span>
                    </>
                  )}
                </div>
              )}
              <div className="field">
                <label>{t.setup.timer}</label>
                <button
                  type="button"
                  className={state.timerEnabled ? 'chip chip--active' : 'chip chip--off'}
                  onClick={() =>
                    dispatch({ type: 'SET_TIMER_ENABLED', payload: !state.timerEnabled })
                  }
                >
                  {state.timerEnabled ? t.setup.timerOn : t.setup.timerOff}
                </button>
              </div>
              {state.timerEnabled && (
                <div className="field">
                  <label htmlFor="timer">{t.setup.duration}</label>
                  <input
                    id="timer"
                    type="number"
                    min={30}
                    max={900}
                    step={30}
                    value={state.timerSeconds}
                    onChange={(event) =>
                      dispatch({ type: 'SET_TIMER_SECONDS', payload: Number(event.target.value) })
                    }
                  />
                  <span className="helper">{t.setup.durationHelper}</span>
                </div>
              )}
              <div className="field">
                <label>{t.setup.hints}</label>
                <button
                  type="button"
                  className={state.hintsEnabled ? 'chip chip--active' : 'chip chip--off'}
                  onClick={() =>
                    dispatch({ type: 'SET_HINTS_ENABLED', payload: !state.hintsEnabled })
                  }
                >
                  {state.hintsEnabled ? t.setup.hintsOn : t.setup.hintsOff}
                </button>
                <span className="helper">{t.setup.hintsHelper}</span>
              </div>
            </>
          )}

          {currentStep.id === 'categories' && customDraft && (
            <>
              <div className="field">
                <label>{t.setup.customCategoryTitle}</label>
                <span className="helper">{t.setup.customCategoryHelper}</span>
              </div>
              <div className="custom-category-editor">
                <div className="custom-category-meta">
                  <div className="field">
                    <label htmlFor="customCategoryName">{t.setup.customCategoryName}</label>
                    <input
                      id="customCategoryName"
                      type="text"
                      value={customDraft.name}
                      onChange={(event) =>
                        setCustomDraft((current) =>
                          current ? { ...current, name: event.target.value } : current
                        )
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="customCategoryIcon">{t.setup.customCategoryIcon}</label>
                    <input
                      id="customCategoryIcon"
                      type="text"
                      className="icon-input"
                      value={customDraft.icon}
                      maxLength={4}
                      onChange={(event) =>
                        setCustomDraft((current) =>
                          current ? { ...current, icon: event.target.value } : current
                        )
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label>{t.setup.customCategoryRows}</label>
                  <div className="custom-word-list">
                    {customDraft.rows.map((row, index) => (
                      <div key={index} className="custom-word-row">
                        <input
                          type="text"
                          value={row.word}
                          placeholder={t.setup.customWordPlaceholder}
                          onChange={(event) =>
                            onUpdateCustomRow(index, 'word', event.target.value)
                          }
                        />
                        <input
                          type="text"
                          value={row.hint}
                          placeholder={t.setup.customHintPlaceholder}
                          onChange={(event) =>
                            onUpdateCustomRow(index, 'hint', event.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="icon-button icon-button--soft icon-button--glyph"
                          onClick={() => onRemoveCustomRow(index)}
                          aria-label={t.setup.removeCustomRow}
                          title={t.setup.removeCustomRow}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="chip" onClick={onAddCustomRow}>
                    {t.setup.addCustomRow}
                  </button>
                </div>
              </div>
              {customErrors.length > 0 && (
                <div className="alert" role="alert">
                  {customErrors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
              {editingCustomCategory && (
                <div className="custom-category-editor-actions">
                  <button
                    type="button"
                    className="chip"
                    onClick={() => onExportCustomCategory(editingCustomCategory)}
                  >
                    {t.setup.exportCustomCategory}
                  </button>
                  <button
                    type="button"
                    className="chip chip--off"
                    onClick={() => onDeleteCustomCategory(editingCustomCategory)}
                  >
                    {t.setup.deleteCustomCategory}
                  </button>
                </div>
              )}
            </>
          )}

          {currentStep.id === 'categories' && !customDraft && (
            <>
              <div className="field">
                <label>{t.setup.categories}</label>
                <div className="toggle">
                  <button
                    type="button"
                    className={state.categoryMode !== 'custom' ? 'chip chip--active' : 'chip'}
                    onClick={() => onSetCategoryMode('all')}
                  >
                    {t.setup.all}
                  </button>
                  <button
                    type="button"
                    className={state.categoryMode === 'custom' ? 'chip chip--active' : 'chip'}
                    onClick={() => onSetCategoryMode('custom')}
                  >
                    {t.setup.select}
                  </button>
                </div>
                <span className="helper">
                  {formatString(t.setup.categoryCount, {
                    count: selectedCount || 0,
                    words: availableWordsCount || 0,
                  })}
                </span>
              </div>
              {state.categoryMode === 'custom' ? (
                <div className="field">
                  <label>{t.setup.pickCategories}</label>
                  <div className="category-grid">
                    {categories.map((category) => {
                      const selected = selectedCategories.includes(category);
                      const customCategory = customCategoriesForLanguage.find(
                        (item) => item.name === category
                      );
                      return (
                        <div
                          key={category}
                          className={`category-card${
                            selected ? ' category-card--active' : ''
                          }${customCategory ? ' category-card--has-edit' : ''}`}
                        >
                          <button
                            type="button"
                            className="category-card__main"
                            onClick={() => onToggleCategory(category)}
                            aria-pressed={selected}
                          >
                            <span className="category-icon" aria-hidden="true">
                              {getCategoryIcon(category, icons)}
                            </span>
                            <span className="category-label">{category}</span>
                          </button>
                          {customCategory && (
                            <button
                              type="button"
                              className="category-edit-button"
                              onClick={() => onEditCustomCategory(customCategory)}
                              aria-label={t.setup.editCustomCategory}
                              title={t.setup.editCustomCategory}
                            >
                              ✎
                            </button>
                          )}
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      className="category-card category-card--create"
                      onClick={onStartCustomCategory}
                    >
                      <span className="category-icon" aria-hidden="true">
                        ＋
                      </span>
                      <span className="category-label">{t.setup.createCustomCategory}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <p className="muted">{t.setup.allActive}</p>
              )}
            </>
          )}

          {errors.length > 0 && (
            <div className="alert" role="alert">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="actions">
            {customDraft && (
              <button type="button" className="primary" onClick={onSaveCustomCategory}>
                {t.setup.saveCustomCategory}
              </button>
            )}
            {customDraft && (
              <button
                type="button"
                className="ghost"
                onClick={() => {
                  setCustomDraft(null);
                  setCustomErrors([]);
                }}
              >
                {t.setup.cancelCustomCategory}
              </button>
            )}
            {!customDraft && !isFirst && (
              <button type="button" className="ghost" onClick={onPrev}>
                {t.setup.back}
              </button>
            )}
            {!customDraft && !isLast && (
              <button type="button" className="primary" onClick={onNext}>
                {t.setup.next}
              </button>
            )}
            {!customDraft && isLast && (
              <button type="button" className="primary" onClick={onStart}>
                {t.setup.start}
              </button>
            )}
            {!customDraft && isFirst && (
              <button type="button" className="ghost" onClick={onResetAll}>
                {t.setup.reset}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
