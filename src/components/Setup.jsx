import React, { useMemo, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import { parseCategoryFiles, pickRandomEntry } from '../utils.js';

const categoryFiles = import.meta.glob('../data/categories/*.csv', {
  as: 'raw',
  eager: true,
});

const steps = [
  { id: 'players', label: 'Jugadores' },
  { id: 'mode', label: 'Modo y reglas' },
  { id: 'categories', label: 'Categorías' },
];

const CATEGORY_ICONS = {
  animales: '🐾',
  animal: '🐾',
  comida: '🍽️',
  bebidas: '🥤',
  lugares: '🗺️',
  lugar: '🗺️',
  deportes: '🏀',
  deporte: '🏀',
  profesiones: '🧑‍💼',
  profesion: '🧑‍💼',
  peliculas: '🎬',
  cine: '🎬',
  series: '📺',
  musica: '🎵',
  tecnologia: '💻',
  accion: '⚡',
  objetos: '📦',
  objeto: '📦',
  naturaleza: '🌿',
  personajes: '🧑',
  famosos: '⭐',
  videojuegos: '🎮',
  transporte: '🚗',
  viajes: '✈️',
  historia: '🏛️',
  ciudades: '🏙️',
  paises: '🌍',
  animalesdomesticos: '🐶',
  animalesmarinos: '🐠',
  frutas: '🍎',
  verduras: '🥦',
  instrumentos: '🎸',
  deportesolimpicos: '🥇',
};

const normalizeCategory = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');

const getCategoryIcon = (category) => CATEGORY_ICONS[normalizeCategory(category)] || '🏷️';

const Setup = () => {
  const { state, dispatch } = useGame();
  const [errors, setErrors] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const { entries: wordEntries, categories } = useMemo(
    () => parseCategoryFiles(categoryFiles),
    []
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
      nextErrors.push('El número de jugadores debe estar entre 3 y 15.');
    }

    if (!wordEntries.length) {
      nextErrors.push('Agrega palabras en src/data/categories para iniciar la partida.');
    }

    if (state.categoryMode === 'custom') {
      if (!selectedCategories.length) {
        nextErrors.push('Selecciona al menos una categoría.');
      } else if (!filteredEntries.length) {
        nextErrors.push('No hay palabras para las categorías seleccionadas.');
      }
    }

    const emptyNames = state.players.filter((player) => !player.name.trim());
    if (emptyNames.length) {
      nextErrors.push('Todos los jugadores deben tener un nombre.');
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
          aria-label="Pasos de configuración"
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
                <span className="progress-label">
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="card">
          <h2>Configura la partida</h2>
          <p className="muted">Divide la preparación en pasos rápidos.</p>

          {currentStep.id === 'players' && (
          <>
            <div className="field">
              <label htmlFor="playerCount">Número de jugadores</label>
              <div className="stepper">
                <button
                  type="button"
                  className="stepper__button"
                  onClick={() =>
                    dispatch({ type: 'SET_PLAYER_COUNT', payload: state.playerCount - 1 })
                  }
                  aria-label="Disminuir jugadores"
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
                    dispatch({ type: 'SET_PLAYER_COUNT', payload: Number(event.target.value) })
                  }
                />
                <button
                  type="button"
                  className="stepper__button"
                  onClick={() =>
                    dispatch({ type: 'SET_PLAYER_COUNT', payload: state.playerCount + 1 })
                  }
                  aria-label="Aumentar jugadores"
                >
                  ▴
                </button>
              </div>
            </div>
            <div className="field">
              <label>Jugadores</label>
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
                        placeholder={`Jugador ${index + 1}`}
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
                      aria-label={`Color de ${player.name || `Jugador ${index + 1}`}`}
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
              <label>Modo de juego</label>
              <div className="toggle">
                <button
                  type="button"
                  className={state.gameMode === 'word' ? 'chip chip--active' : 'chip'}
                  onClick={() => dispatch({ type: 'SET_GAME_MODE', payload: 'word' })}
                >
                  🗣️ Por palabra
                </button>
                <button
                  type="button"
                  className={state.gameMode === 'draw' ? 'chip chip--active' : 'chip'}
                  onClick={() => dispatch({ type: 'SET_GAME_MODE', payload: 'draw' })}
                >
                  🎨 Por dibujo
                </button>
              </div>
              <span className="helper">
                En modo dibujo cada jugador añade un trazo a la pizarra común.
              </span>
            </div>
            {state.gameMode === 'draw' && (
              <div className="field">
                <label>Opciones de dibujo</label>
                <div className="stack">
                  <div>
                    <span className="helper">Colores del trazo</span>
                    <div className="toggle">
                      <button
                        type="button"
                        className={!state.drawAllowColorPick ? 'chip chip--active' : 'chip'}
                        onClick={() =>
                          dispatch({ type: 'SET_DRAW_ALLOW_COLOR_PICK', payload: false })
                        }
                      >
                        🎯 Fijos por jugador
                      </button>
                      <button
                        type="button"
                        className={state.drawAllowColorPick ? 'chip chip--active' : 'chip'}
                        onClick={() =>
                          dispatch({ type: 'SET_DRAW_ALLOW_COLOR_PICK', payload: true })
                        }
                      >
                        🌈 Elegir color
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="helper">Trazos por ronda</span>
                    <div className="toggle">
                      <button
                        type="button"
                        className={state.drawLimitStrokes ? 'chip chip--active' : 'chip'}
                        onClick={() =>
                          dispatch({ type: 'SET_DRAW_LIMIT_STROKES', payload: true })
                        }
                      >
                        ✍️ Un trazo por jugador
                      </button>
                      <button
                        type="button"
                        className={!state.drawLimitStrokes ? 'chip chip--active' : 'chip'}
                        onClick={() =>
                          dispatch({ type: 'SET_DRAW_LIMIT_STROKES', payload: false })
                        }
                      >
                        ♾️ Sin límite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="field">
              <label>Impostores</label>
              <div className="toggle">
                <button
                  type="button"
                  className={!state.allowMultipleImpostors ? 'chip chip--active' : 'chip'}
                  onClick={() =>
                    dispatch({ type: 'SET_ALLOW_MULTIPLE_IMPOSTORS', payload: false })
                  }
                >
                  😈 1 impostor
                </button>
                <button
                  type="button"
                  className={state.allowMultipleImpostors ? 'chip chip--active' : 'chip'}
                  onClick={() =>
                    dispatch({ type: 'SET_ALLOW_MULTIPLE_IMPOSTORS', payload: true })
                  }
                >
                  👥 Varios impostores
                </button>
              </div>
              <span className="helper">Activa para ajustar más de un impostor.</span>
            </div>
            {state.allowMultipleImpostors && (
              <div className="field field--danger">
                <label htmlFor="impostorCount">Número de impostores</label>
                <div className="stepper">
                  <button
                    type="button"
                    className="stepper__button"
                    onClick={() =>
                      dispatch({ type: 'SET_IMPOSTOR_COUNT', payload: state.impostorCount - 1 })
                    }
                    aria-label="Disminuir impostores"
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
                      dispatch({ type: 'SET_IMPOSTOR_COUNT', payload: state.impostorCount + 1 })
                    }
                    aria-label="Aumentar impostores"
                  >
                    ▴
                  </button>
                </div>
                <span className="helper">Se permiten varios impostores.</span>
              </div>
            )}
            <div className="field">
              <label>Temporizador de ronda</label>
              <button
                type="button"
                className={state.timerEnabled ? 'chip chip--active' : 'chip chip--off'}
                onClick={() =>
                  dispatch({ type: 'SET_TIMER_ENABLED', payload: !state.timerEnabled })
                }
              >
                ⏱️ {state.timerEnabled ? 'Activo' : 'Desactivado'}
              </button>
            </div>
            {state.timerEnabled && (
              <div className="field">
                <label htmlFor="timer">Duración (segundos)</label>
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
                <span className="helper">Entre 30 y 900 segundos.</span>
              </div>
            )}
            <div className="field">
              <label>Pistas</label>
              <button
                type="button"
                className={state.hintsEnabled ? 'chip chip--active' : 'chip chip--off'}
                onClick={() =>
                  dispatch({ type: 'SET_HINTS_ENABLED', payload: !state.hintsEnabled })
                }
              >
                💡 {state.hintsEnabled ? 'Activadas' : 'Desactivadas'}
              </button>
              <span className="helper">Si se activan, solo las ve el impostor.</span>
            </div>
          </>
        )}

          {currentStep.id === 'categories' && (
          <>
            <div className="field">
              <label>Categorías</label>
              <div className="toggle">
                <button
                  type="button"
                  className={state.categoryMode !== 'custom' ? 'chip chip--active' : 'chip'}
                  onClick={() => onSetCategoryMode('all')}
                >
                  🌐 Todas
                </button>
                <button
                  type="button"
                  className={state.categoryMode === 'custom' ? 'chip chip--active' : 'chip'}
                  onClick={() => onSetCategoryMode('custom')}
                >
                  🧩 Seleccionar
                </button>
              </div>
              <span className="helper">
                Categorías seleccionadas: {selectedCount || 0} · Palabras disponibles:{' '}
                {availableWordsCount || 0}
              </span>
            </div>
            {state.categoryMode === 'custom' ? (
              <div className="field">
                <label>Selecciona categorías</label>
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
                          {getCategoryIcon(category)}
                        </span>
                        <span className="category-label">{category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="muted">Todas las categorías están activas.</p>
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
              ← Atrás
            </button>
          )}
          {!isLast && (
            <button type="button" className="primary" onClick={onNext}>
              Siguiente →
            </button>
          )}
          {isLast && (
            <button type="button" className="primary" onClick={onStart}>
              🚀 Iniciar
            </button>
          )}
          {isFirst && (
            <button type="button" className="ghost" onClick={onResetAll}>
              ↺ Reiniciar ajustes
            </button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
