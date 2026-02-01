import React, { useMemo, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import { parseCategoryFiles, pickRandomEntry } from '../utils.js';
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

const Setup = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const [errors, setErrors] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const steps = useMemo(
    () => [
      { id: 'players', label: t.setup.steps.players },
      { id: 'mode', label: t.setup.steps.mode },
      { id: 'categories', label: t.setup.steps.categories },
    ],
    [t]
  );

  const categoryFiles = categoryFilesByLanguage[state.language] || categoryFilesByLanguage.es;
  const { entries: wordEntries, categories, icons } = useMemo(
    () => parseCategoryFiles(categoryFiles),
    [categoryFiles]
  );
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
      const entry = pickRandomEntry(filteredEntries.length ? filteredEntries : wordEntries);
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
                <div className="stack">
                  {state.players.map((player, index) => (
                    <div key={index} className="player-row">
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
                      <span className="helper">{t.setup.strokeColors}</span>
                      <div className="toggle">
                        <button
                          type="button"
                          className={!state.drawAllowColorPick ? 'chip chip--active' : 'chip'}
                          onClick={() =>
                            dispatch({ type: 'SET_DRAW_ALLOW_COLOR_PICK', payload: false })
                          }
                        >
                          {t.setup.fixedPerPlayer}
                        </button>
                        <button
                          type="button"
                          className={state.drawAllowColorPick ? 'chip chip--active' : 'chip'}
                          onClick={() =>
                            dispatch({ type: 'SET_DRAW_ALLOW_COLOR_PICK', payload: true })
                          }
                        >
                          {t.setup.pickColor}
                        </button>
                      </div>
                    </div>
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

          {currentStep.id === 'categories' && (
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
                      return (
                        <button
                          key={category}
                          type="button"
                          className={`category-card${selected ? ' category-card--active' : ''}`}
                          onClick={() => onToggleCategory(category)}
                          aria-pressed={selected}
                        >
                          <span className="category-icon" aria-hidden="true">
                            {getCategoryIcon(category, icons)}
                          </span>
                          <span className="category-label">{category}</span>
                        </button>
                      );
                    })}
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
            {!isFirst && (
              <button type="button" className="ghost" onClick={onPrev}>
                {t.setup.back}
              </button>
            )}
            {!isLast && (
              <button type="button" className="primary" onClick={onNext}>
                {t.setup.next}
              </button>
            )}
            {isLast && (
              <button type="button" className="primary" onClick={onStart}>
                {t.setup.start}
              </button>
            )}
            {isFirst && (
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
