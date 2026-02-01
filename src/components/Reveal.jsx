import React, { useEffect, useMemo, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import ColorSelect from './ColorSelect.jsx';
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

const Reveal = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const [selected, setSelected] = useState('');
  const [secretSelected, setSecretSelected] = useState('');
  const [showSecretForm, setShowSecretForm] = useState(false);

  const categoryFiles = categoryFilesByLanguage[state.language] || categoryFilesByLanguage.es;
  const { entries: wordEntries, categories } = useMemo(
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

  const impostorPlayers = useMemo(
    () =>
      (state.impostorIndices || []).map((index) => ({
        index,
        name: state.players[index]?.name || t.common.playerLabel,
        color: state.players[index]?.color || '#9aa0a6',
      })),
    [state.impostorIndices, state.players, t]
  );
  const hintText = state.hintsEnabled && state.wordHint ? state.wordHint : '';

  const alivePlayers = useMemo(() => {
    if (state.alivePlayers.length) {
      return state.alivePlayers;
    }
    return state.players.map((_, index) => index);
  }, [state.alivePlayers, state.players]);

  const eliminatedPlayers = useMemo(() => {
    return state.players
      .map((player, index) => ({ name: player.name, color: player.color, index }))
      .filter((player) => !alivePlayers.includes(player.index));
  }, [alivePlayers, state.players]);

  const innocentsAliveCount =
    alivePlayers.length -
    (state.impostorIndices || []).filter((index) => alivePlayers.includes(index)).length;

  const isSecretMode = state.voteMode === 'secret';
  const secretActive =
    isSecretMode &&
    state.secretVoteOrder.length > 0 &&
    state.secretVoteStep < state.secretVoteOrder.length;
  const voteCandidates = state.tieCandidates.length ? state.tieCandidates : alivePlayers;
  const voteOptions = useMemo(
    () =>
      voteCandidates.map((index) => ({
        value: String(index),
        label: state.players[index]?.name || t.common.playerLabel,
        color: state.players[index]?.color || '#9aa0a6',
      })),
    [state.players, t, voteCandidates]
  );
  const currentSecretVoter = secretActive
    ? state.secretVoteOrder[state.secretVoteStep]
    : null;
  const currentSecretPlayer =
    currentSecretVoter !== null && currentSecretVoter !== undefined
      ? state.players[currentSecretVoter]
      : null;
  const currentSecretName = currentSecretPlayer?.name || '';

  useEffect(() => {
    if (selected && !voteCandidates.includes(Number(selected))) {
      setSelected('');
    }
    if (secretSelected && !voteCandidates.includes(Number(secretSelected))) {
      setSecretSelected('');
    }
  }, [selected, secretSelected, voteCandidates]);

  useEffect(() => {
    setShowSecretForm(false);
    setSecretSelected('');
  }, [state.secretVoteStep]);

  const onVote = () => {
    if (!selected) return;
    const targetIndex = Number(selected);
    const targetName = state.players[targetIndex]?.name || t.common.playerLabel;
    const confirmed = window.confirm(
      formatString(t.reveal.confirmVotePrompt, { name: targetName })
    );
    if (confirmed) {
      dispatch({ type: 'CAST_VOTE', payload: targetIndex });
    }
  };

  const onSecretVote = () => {
    if (!secretSelected) return;
    const targetIndex = Number(secretSelected);
    const confirmed = window.confirm(t.reveal.confirmSecret);
    if (confirmed) {
      dispatch({ type: 'SUBMIT_SECRET_VOTE', payload: targetIndex });
      setShowSecretForm(false);
      setSecretSelected('');
    }
  };

  const onReveal = () => {
    const confirmed = window.confirm(t.reveal.confirmReveal);
    if (confirmed) {
      dispatch({ type: 'REVEAL_IMPOSTOR' });
    }
  };

  const onNewGame = () => {
    if (!wordEntries.length) {
      window.alert(t.reveal.alertWords);
      return;
    }
    if (state.categoryMode === 'custom' && !selectedCategories.length) {
      window.alert(t.reveal.alertCategories);
      return;
    }
    if (state.categoryMode === 'custom' && !filteredEntries.length) {
      window.alert(t.reveal.alertNoWords);
      return;
    }
    const entry = pickRandomEntry(filteredEntries.length ? filteredEntries : wordEntries);
    dispatch({
      type: 'START_GAME',
      payload: { word: entry.word, wordHint: entry.hint },
    });
  };

  const onConfigure = () => {
    dispatch({ type: 'RESET_GAME' });
    dispatch({ type: 'START_SETUP' });
  };

  const renderResult = () => {
    if (!state.lastVote) return null;
    if (state.lastVote.status === 'tie') return null;

    if (state.lastVote.status === 'correct') {
      if (!state.winner) {
        const remainingImpostors = Number.isInteger(state.lastVote.remainingImpostors)
          ? state.lastVote.remainingImpostors
          : (state.impostorIndices || []).filter((index) => alivePlayers.includes(index)).length;

        return (
          <div className="reveal">
            <span className="badge">{t.reveal.correct}</span>
            <p className="muted">{t.reveal.wasImpostor}</p>
            {remainingImpostors > 0 && (
              <p className="muted">{t.reveal.moreImpostors}</p>
            )}
          </div>
        );
      }
      if (state.winner !== 'innocents') {
        return null;
      }
      return (
        <div className="reveal">
          <span className="badge">{t.reveal.correct}</span>
          <h3>{t.reveal.innocentsWin}</h3>
          <div className="tag-list">
            {impostorPlayers.map((player) => (
              <span
                key={player.index}
                className="player-tag"
                style={{ '--player-color': player.color }}
              >
                {player.name}
              </span>
            ))}
          </div>
          <p className="muted">
            {t.reveal.wordWas} {state.word}
          </p>
          {hintText && (
            <p className="muted">
              {t.reveal.hintWas} {hintText}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="reveal reveal--warning">
        <span className="badge badge--alert">{t.reveal.wrong}</span>
        <p className="muted">
          {t.reveal.notImpostor}{' '}
          <span
            className="player-tag"
            style={{ '--player-color': state.lastVote.color || '#9aa0a6' }}
          >
            {state.lastVote.name}
          </span>
          .
        </p>
        {!state.winner && (
          <p className="muted">
            {formatString(t.reveal.innocentsLeft, {
              count: Number.isInteger(state.lastVote.remainingInnocents)
                ? state.lastVote.remainingInnocents
                : innocentsAliveCount,
            })}
          </p>
        )}
        {!state.winner && <p className="muted">{t.reveal.keepTalking}</p>}
      </div>
    );
  };

  const renderTie = () => {
    if (!state.lastVote || state.lastVote.status !== 'tie') return null;
    const indices = Array.isArray(state.lastVote.indices) ? state.lastVote.indices : [];
    if (!indices.length) return null;

    return (
      <div className="reveal reveal--warning">
        <span className="badge badge--alert">{t.reveal.tie}</span>
        <div className="tag-list">
          {indices.map((index) => (
            <span
              key={index}
              className="player-tag"
              style={{ '--player-color': state.players[index]?.color || '#9aa0a6' }}
            >
              {state.players[index]?.name || t.common.playerLabel}
            </span>
          ))}
        </div>
        <p className="muted">{t.reveal.voteAgainTie}</p>
      </div>
    );
  };

  const renderWinner = () => {
    if (!state.winner || state.winner === 'innocents') {
      return null;
    }

    return (
      <div className="reveal reveal--danger">
        <span className="badge badge--alert">{t.reveal.impostorLabel}</span>
        <h3>{t.reveal.impostorsWin}</h3>
        <div className="tag-list">
          {impostorPlayers.map((player) => (
            <span
              key={player.index}
              className="player-tag"
              style={{ '--player-color': player.color }}
            >
              {player.name}
            </span>
          ))}
        </div>
        <p className="muted">
          {t.reveal.wordWas} {state.word}
        </p>
        {hintText && (
          <p className="muted">
            {t.reveal.hintWas} {hintText}
          </p>
        )}
      </div>
    );
  };

  const renderReveal = () => {
    if (!state.revealImpostor || state.winner) {
      return null;
    }

    return (
      <div className="reveal">
        <span className="badge badge--alert">{t.reveal.revealed}</span>
        <h3>{t.reveal.impostorsLabel}</h3>
        <div className="tag-list">
          {impostorPlayers.map((player) => (
            <span
              key={player.index}
              className="player-tag"
              style={{ '--player-color': player.color }}
            >
              {player.name}
            </span>
          ))}
        </div>
        <p className="muted">
          {t.reveal.wordWas} {state.word}
        </p>
        {hintText && (
          <p className="muted">
            {t.reveal.hintWas} {hintText}
          </p>
        )}
      </div>
    );
  };

  const renderSecretVoting = () => {
    if (!secretActive || !currentSecretName) {
      return null;
    }

    if (!showSecretForm) {
      return (
        <div className="reveal">
          <span className="badge">{t.reveal.secretTitle}</span>
          <h3>
            {t.reveal.passPhoneTo}{' '}
            <span
              className="player-tag"
              style={{ '--player-color': currentSecretPlayer?.color || '#9aa0a6' }}
            >
              {currentSecretName}
            </span>
          </h3>
          <p className="muted">{t.reveal.secretNoLook}</p>
          <button type="button" className="primary" onClick={() => setShowSecretForm(true)}>
            {t.reveal.voteSecret}
          </button>
        </div>
      );
    }

    return (
      <div className="reveal">
        <span className="badge">{t.reveal.secretVoteTitle}</span>
        <h3>
          <span
            className="player-tag"
            style={{ '--player-color': currentSecretPlayer?.color || '#9aa0a6' }}
          >
            {currentSecretName}
          </span>
        </h3>
        <div className="field">
          <label htmlFor="secretVote">{t.reveal.voteFor}</label>
          <ColorSelect
            value={secretSelected}
            options={voteOptions}
            placeholder={t.reveal.selectPlayer}
            onChange={setSecretSelected}
          />
          <button
            type="button"
            className="primary"
            onClick={onSecretVote}
            disabled={!secretSelected}
          >
            {t.reveal.confirmVoteLabel}
          </button>
        </div>
      </div>
    );
  };

  const canVote = !state.winner && !state.revealImpostor;
  const showPublicVoting = canVote && !isSecretMode && !secretActive;
  const showSecretControls = canVote && isSecretMode && !secretActive;

  const onSetVoteMode = (mode) => {
    if (mode === 'public') {
      setShowSecretForm(false);
      setSecretSelected('');
      dispatch({ type: 'CANCEL_SECRET_VOTE' });
      dispatch({ type: 'SET_VOTE_MODE', payload: 'public' });
      return;
    }
    dispatch({ type: 'SET_VOTE_MODE', payload: 'secret' });
  };

  return (
    <section className="screen">
      <div className="card">
        <h2>{t.reveal.title}</h2>
        <p className="muted">{t.reveal.intro}</p>
        {canVote && (
          <div className="field">
            <label>{t.reveal.voteMode}</label>
            <div className="toggle">
              <button
                type="button"
                className={!isSecretMode ? 'chip chip--active' : 'chip'}
                onClick={() => onSetVoteMode('public')}
              >
                {t.reveal.public}
              </button>
              <button
                type="button"
                className={isSecretMode ? 'chip chip--active' : 'chip'}
                onClick={() => onSetVoteMode('secret')}
              >
                {t.reveal.secret}
              </button>
            </div>
          </div>
        )}
        {showPublicVoting && (
          <div className="field">
            <label htmlFor="vote">{t.reveal.voteFor}</label>
            <ColorSelect
              value={selected}
              options={voteOptions}
              placeholder={t.reveal.selectPlayer}
              onChange={setSelected}
            />
            <button
              type="button"
              className="primary"
              onClick={onVote}
              disabled={!selected}
            >
              {t.reveal.confirmVoteLabel}
            </button>
          </div>
        )}
        {showSecretControls && (
          <div className="field">
            <p className="muted">{t.reveal.secretIntro}</p>
            <button
              type="button"
              className="primary"
              onClick={() => dispatch({ type: 'START_SECRET_VOTE' })}
            >
              {t.reveal.startSecret}
            </button>
          </div>
        )}
        {renderSecretVoting()}
        {!secretActive && renderTie()}
        {!secretActive && renderResult()}
        {!secretActive && renderWinner()}
        {!secretActive && renderReveal()}
        {!secretActive && eliminatedPlayers.length > 0 && (
          <div className="field">
            <label>{t.reveal.eliminated}</label>
            <div className="tag-list">
              {eliminatedPlayers.map((player) => (
                <span
                  key={player.index}
                  className="player-tag"
                  style={{ '--player-color': player.color || '#9aa0a6' }}
                >
                  {player.name || t.common.playerLabel}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="actions">
          {state.timerEnabled && canVote && !secretActive && (
            <button
              type="button"
              className="ghost"
              onClick={() => dispatch({ type: 'PLAY_AGAIN' })}
            >
              {t.reveal.playAgain}
            </button>
          )}
          {canVote && !secretActive && (
            <button type="button" className="ghost" onClick={onReveal}>
              {t.reveal.revealImpostor}
            </button>
          )}
          {secretActive && (
            <button
              type="button"
              className="ghost"
              onClick={() => {
                setShowSecretForm(false);
                setSecretSelected('');
                dispatch({ type: 'CANCEL_SECRET_VOTE' });
              }}
            >
              {t.reveal.cancelSecret}
            </button>
          )}
          <button type="button" className="ghost" onClick={onNewGame}>
            {t.reveal.newGame}
          </button>
          <button type="button" className="ghost" onClick={onConfigure}>
            {t.reveal.configure}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reveal;
