import React from 'react';
import { useGame } from '../state/GameContext.jsx';
import { getStrings } from '../i18n.js';

const Deal = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
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
    gameMode,
  } = state;

  if (dealStep >= dealOrder.length) {
    const showRound = timerEnabled || gameMode === 'draw';
    const roundLabel =
      gameMode === 'draw'
        ? t.deal.startDrawing
        : showRound
          ? t.deal.startRound
          : t.deal.goVote;

    return (
      <section className="screen">
        <div className="card card--center">
          <h2>{t.deal.allSet}</h2>
          <p className="muted">{t.deal.allSetText}</p>
          <button type="button" className="primary" onClick={() => dispatch({ type: 'START_ROUND' })}>
            {roundLabel}
          </button>
        </div>
      </section>
    );
  }

  const currentPlayerIndex = dealOrder[dealStep];
  const currentPlayer = players[currentPlayerIndex] || {
    name: t.common.playerLabel,
    color: '#9aa0a6',
  };
  const isImpostor = impostorIndices.includes(currentPlayerIndex);

  const screenClassName = showRole ? 'screen screen--full' : 'screen';

  return (
    <section className={screenClassName}>
      {!showRole ? (
        <div className="card card--center">
          <h2>{t.deal.passPhone}</h2>
          <p className="muted">
            {t.deal.turnOf}{' '}
            <strong className="player-tag" style={{ '--player-color': currentPlayer.color }}>
              {currentPlayer.name}
            </strong>
            . {t.deal.noLook}
          </p>
          <button type="button" className="primary" onClick={() => dispatch({ type: 'SHOW_ROLE' })}>
            {t.deal.seeRole}
          </button>
        </div>
      ) : (
        <div className="card card--center role">
          {isImpostor ? (
            <>
              <span className="badge badge--alert">{t.deal.impostor}</span>
              <p className="muted">
                {t.deal.player}:{' '}
                <span className="player-tag" style={{ '--player-color': currentPlayer.color }}>
                  {currentPlayer.name}
                </span>
              </p>
              <h2>{t.deal.youImpostor}</h2>
              <p className="muted">{t.deal.impostorHint}</p>
              {hintsEnabled && wordHint && (
                <>
                  <p className="muted">{t.deal.hintLabel}</p>
                  <p className="word-hint">{wordHint}</p>
                </>
              )}
            </>
          ) : (
            <>
              <span className="badge">{t.deal.innocent}</span>
              <p className="muted">
                {t.deal.player}:{' '}
                <span className="player-tag" style={{ '--player-color': currentPlayer.color }}>
                  {currentPlayer.name}
                </span>
              </p>
              <h2>{t.deal.yourWord}</h2>
              <p className="word">{word}</p>
            </>
          )}
          <button type="button" className="ghost" onClick={() => dispatch({ type: 'HIDE_ROLE' })}>
            {t.deal.hide}
          </button>
        </div>
      )}
    </section>
  );
};

export default Deal;
