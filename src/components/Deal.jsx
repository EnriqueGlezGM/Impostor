import React from 'react';
import { useGame } from '../state/GameContext.jsx';

const Deal = () => {
  const { state, dispatch } = useGame();
  const {
    dealOrder,
    dealStep,
    players,
    showRole,
    impostorIndices,
    word,
    wordHint,
    hintsEnabled,
    timerEnabled,
  } = state;

  if (dealStep >= dealOrder.length) {
    return (
      <section className="screen">
        <div className="card card--center">
          <h2>Todos listos</h2>
          <p className="muted">Cada jugador conoce su rol. Es momento de empezar.</p>
          <button type="button" className="primary" onClick={() => dispatch({ type: 'START_ROUND' })}>
            {timerEnabled ? 'Empezar ronda' : 'Ir a votación'}
          </button>
        </div>
      </section>
    );
  }

  const currentPlayerIndex = dealOrder[dealStep];
  const currentPlayer = players[currentPlayerIndex] || { name: 'Jugador', color: '#9aa0a6' };
  const isImpostor = impostorIndices.includes(currentPlayerIndex);

  const screenClassName = showRole ? 'screen screen--full' : 'screen';

  return (
    <section className={screenClassName}>
      {!showRole ? (
        <div className="card card--center">
          <h2>Pasa el móvil</h2>
          <p className="muted">
            Es el turno de{' '}
            <strong className="player-tag" style={{ '--player-color': currentPlayer.color }}>
              {currentPlayer.name}
            </strong>
            . Nadie más debe mirar.
          </p>
          <button type="button" className="primary" onClick={() => dispatch({ type: 'SHOW_ROLE' })}>
            Ver mi rol
          </button>
        </div>
      ) : (
        <div className="card card--center role">
          {isImpostor ? (
            <>
              <span className="badge badge--alert">Impostor</span>
              <p className="muted">
                Jugador:{' '}
                <span className="player-tag" style={{ '--player-color': currentPlayer.color }}>
                  {currentPlayer.name}
                </span>
              </p>
              <h2>Eres el IMPOSTOR</h2>
              <p className="muted">No tienes palabra. Observa y disimula.</p>
              {hintsEnabled && wordHint && (
                <>
                  <p className="muted">Pista:</p>
                  <p className="word-hint">{wordHint}</p>
                </>
              )}
            </>
          ) : (
            <>
              <span className="badge">Inocente</span>
              <p className="muted">
                Jugador:{' '}
                <span className="player-tag" style={{ '--player-color': currentPlayer.color }}>
                  {currentPlayer.name}
                </span>
              </p>
              <h2>Tu palabra es:</h2>
              <p className="word">{word}</p>
            </>
          )}
          <button type="button" className="ghost" onClick={() => dispatch({ type: 'HIDE_ROLE' })}>
            Ocultar
          </button>
        </div>
      )}
    </section>
  );
};

export default Deal;
