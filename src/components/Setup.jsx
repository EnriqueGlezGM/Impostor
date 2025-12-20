import React, { useMemo, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import wordsText from '../data/words.csv?raw';
import { parseWordEntries, pickRandomEntry } from '../utils.js';

const Setup = () => {
  const { state, dispatch } = useGame();
  const [errors, setErrors] = useState([]);
  const wordEntries = useMemo(() => parseWordEntries(wordsText), []);
  const categories = useMemo(() => {
    const unique = new Set();
    wordEntries.forEach((entry) => {
      if (entry.category) {
        unique.add(entry.category);
      }
    });
    return Array.from(unique).sort((a, b) => a.localeCompare(b, 'es'));
  }, [wordEntries]);
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
      nextErrors.push('Agrega palabras en src/data/words.csv para iniciar la partida.');
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

  return (
    <section className="screen">
      <div className="card">
        <h2>Configura la partida</h2>
        <p className="muted">
          Ajusta jugadores y prepara la partida.
        </p>
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
        <div className="field">
          <label>Categorías</label>
          <div className="toggle">
            <button
              type="button"
              className={state.categoryMode !== 'custom' ? 'chip chip--active' : 'chip'}
              onClick={() => onSetCategoryMode('all')}
            >
              Todas
            </button>
            <button
              type="button"
              className={state.categoryMode === 'custom' ? 'chip chip--active' : 'chip'}
              onClick={() => onSetCategoryMode('custom')}
            >
              Seleccionar
            </button>
          </div>
          <span className="helper">
            Categorías seleccionadas: {selectedCount || 0} · Palabras disponibles: {availableWordsCount || 0}
          </span>
        </div>
        {state.categoryMode === 'custom' && (
          <div className="field">
            <label>Selecciona categorías</label>
            <div className="option-grid">
              {categories.map((category) => (
                <label key={category} className="checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => onToggleCategory(category)}
                  />
                  {category}
                </label>
              ))}
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
              1 impostor
            </button>
            <button
              type="button"
              className={state.allowMultipleImpostors ? 'chip chip--active' : 'chip'}
              onClick={() =>
                dispatch({ type: 'SET_ALLOW_MULTIPLE_IMPOSTORS', payload: true })
              }
            >
              Varios impostores
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
                  dispatch({ type: 'SET_IMPOSTOR_COUNT', payload: Number(event.target.value) })
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
          <div className="toggle">
            <button
              type="button"
              className={!state.timerEnabled ? 'chip chip--active' : 'chip'}
              onClick={() => dispatch({ type: 'SET_TIMER_ENABLED', payload: false })}
            >
              Desactivado
            </button>
            <button
              type="button"
              className={state.timerEnabled ? 'chip chip--active' : 'chip'}
              onClick={() => dispatch({ type: 'SET_TIMER_ENABLED', payload: true })}
            >
              Activado
            </button>
          </div>
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
          <div className="toggle">
            <button
              type="button"
              className={state.hintsEnabled ? 'chip chip--active' : 'chip'}
              onClick={() => dispatch({ type: 'SET_HINTS_ENABLED', payload: true })}
            >
              Activadas
            </button>
            <button
              type="button"
              className={!state.hintsEnabled ? 'chip chip--active' : 'chip'}
              onClick={() => dispatch({ type: 'SET_HINTS_ENABLED', payload: false })}
            >
              Desactivadas
            </button>
          </div>
          <span className="helper">Si se activan, solo las ve el impostor.</span>
        </div>
        {errors.length > 0 && (
          <div className="alert" role="alert">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div className="actions">
          <button type="button" className="primary" onClick={onStart}>
            Iniciar
          </button>
          <button type="button" className="ghost" onClick={onResetAll}>
            Reiniciar ajustes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Setup;
