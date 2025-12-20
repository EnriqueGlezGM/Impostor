import React, { useEffect, useMemo, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import ColorSelect from './ColorSelect.jsx';

const Reveal = () => {
  const { state, dispatch } = useGame();
  const [selected, setSelected] = useState('');
  const [secretSelected, setSecretSelected] = useState('');
  const [showSecretForm, setShowSecretForm] = useState(false);
  const impostorPlayers = useMemo(
    () =>
      (state.impostorIndices || []).map((index) => ({
        index,
        name: state.players[index]?.name || 'Jugador',
        color: state.players[index]?.color || '#9aa0a6',
      })),
    [state.impostorIndices, state.players]
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
        label: state.players[index]?.name || 'Jugador',
        color: state.players[index]?.color || '#9aa0a6',
      })),
    [state.players, voteCandidates]
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
    const targetName = state.players[targetIndex]?.name || 'Jugador';
    const confirmed = window.confirm(`Votar a ${targetName} como impostor?`);
    if (confirmed) {
      dispatch({ type: 'CAST_VOTE', payload: targetIndex });
    }
  };

  const onSecretVote = () => {
    if (!secretSelected) return;
    const targetIndex = Number(secretSelected);
    const confirmed = window.confirm('Confirmar voto secreto?');
    if (confirmed) {
      dispatch({ type: 'SUBMIT_SECRET_VOTE', payload: targetIndex });
      setShowSecretForm(false);
      setSecretSelected('');
    }
  };

  const onReveal = () => {
    const confirmed = window.confirm('Revelar el impostor finaliza la partida. Continuar?');
    if (confirmed) {
      dispatch({ type: 'REVEAL_IMPOSTOR' });
    }
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
            <span className="badge">Correcto</span>
            <p className="muted">Era un impostor.</p>
            {remainingImpostors > 0 && (
              <p className="muted">Quedan más impostores.</p>
            )}
          </div>
        );
      }
      if (state.winner !== 'innocents') {
        return null;
      }
      return (
        <div className="reveal">
          <span className="badge">Correcto</span>
          <h3>Ganan los inocentes</h3>
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
          <p className="muted">La palabra era: {state.word}</p>
          {hintText && <p className="muted">Pista: {hintText}</p>}
        </div>
      );
    }

    return (
      <div className="reveal reveal--warning">
        <span className="badge badge--alert">Fallasteis</span>
        <p className="muted">
          No era el impostor. Se elimina a{' '}
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
            Quedan{' '}
            {Number.isInteger(state.lastVote.remainingInnocents)
              ? state.lastVote.remainingInnocents
              : innocentsAliveCount}{' '}
            inocentes.
          </p>
        )}
        {!state.winner && <p className="muted">Seguid hablando y votad de nuevo.</p>}
      </div>
    );
  };

  const renderTie = () => {
    if (!state.lastVote || state.lastVote.status !== 'tie') return null;
    const indices = Array.isArray(state.lastVote.indices) ? state.lastVote.indices : [];
    if (!indices.length) return null;

    return (
      <div className="reveal reveal--warning">
        <span className="badge badge--alert">Empate</span>
        <div className="tag-list">
          {indices.map((index) => (
            <span
              key={index}
              className="player-tag"
              style={{ '--player-color': state.players[index]?.color || '#9aa0a6' }}
            >
              {state.players[index]?.name || 'Jugador'}
            </span>
          ))}
        </div>
        <p className="muted">Votad de nuevo solo entre ellos.</p>
      </div>
    );
  };

  const renderWinner = () => {
    if (!state.winner || state.winner === 'innocents') {
      return null;
    }

    return (
      <div className="reveal reveal--danger">
        <span className="badge badge--alert">Impostor</span>
        <h3>Ganan los impostores</h3>
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
        <p className="muted">La palabra era: {state.word}</p>
        {hintText && <p className="muted">Pista: {hintText}</p>}
      </div>
    );
  };

  const renderReveal = () => {
    if (!state.revealImpostor || state.winner) {
      return null;
    }

    return (
      <div className="reveal">
        <span className="badge badge--alert">Revelado</span>
        <h3>Impostores</h3>
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
        <p className="muted">La palabra era: {state.word}</p>
        {hintText && <p className="muted">Pista: {hintText}</p>}
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
          <span className="badge">Votacion secreta</span>
          <h3>
            Pasa el movil a{' '}
            <span
              className="player-tag"
              style={{ '--player-color': currentSecretPlayer?.color || '#9aa0a6' }}
            >
              {currentSecretName}
            </span>
          </h3>
          <p className="muted">Nadie mas debe mirar.</p>
          <button type="button" className="primary" onClick={() => setShowSecretForm(true)}>
            Votar en secreto
          </button>
        </div>
      );
    }

    return (
      <div className="reveal">
        <span className="badge">Voto secreto</span>
        <h3>
          <span
            className="player-tag"
            style={{ '--player-color': currentSecretPlayer?.color || '#9aa0a6' }}
          >
            {currentSecretName}
          </span>
        </h3>
        <div className="field">
          <label htmlFor="secretVote">Votar por</label>
          <ColorSelect
            value={secretSelected}
            options={voteOptions}
            placeholder="Selecciona un jugador"
            onChange={setSecretSelected}
          />
          <button
            type="button"
            className="primary"
            onClick={onSecretVote}
            disabled={!secretSelected}
          >
            Confirmar voto
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
        <h2>Votacion</h2>
        <p className="muted">
          Elige a quien creeis que es el impostor. Si acierta el grupo, ganan los
          inocentes.
        </p>
        {canVote && (
          <div className="field">
            <label>Modo de votacion</label>
            <div className="toggle">
              <button
                type="button"
                className={!isSecretMode ? 'chip chip--active' : 'chip'}
                onClick={() => onSetVoteMode('public')}
              >
                Publica
              </button>
              <button
                type="button"
                className={isSecretMode ? 'chip chip--active' : 'chip'}
                onClick={() => onSetVoteMode('secret')}
              >
                Secreta
              </button>
            </div>
          </div>
        )}
        {showPublicVoting && (
          <div className="field">
            <label htmlFor="vote">Votar por</label>
            <ColorSelect
              value={selected}
              options={voteOptions}
              placeholder="Selecciona un jugador"
              onChange={setSelected}
            />
            <button
              type="button"
              className="primary"
              onClick={onVote}
              disabled={!selected}
            >
              Confirmar voto
            </button>
          </div>
        )}
        {showSecretControls && (
          <div className="field">
            <p className="muted">Cada jugador vota en privado, uno por uno.</p>
            <button
              type="button"
              className="primary"
              onClick={() => dispatch({ type: 'START_SECRET_VOTE' })}
            >
              Iniciar votacion secreta
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
            <label>Eliminados</label>
            <div className="tag-list">
              {eliminatedPlayers.map((player) => (
                <span
                  key={player.index}
                  className="player-tag"
                  style={{ '--player-color': player.color || '#9aa0a6' }}
                >
                  {player.name || 'Jugador'}
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
              Jugar otra ronda
            </button>
          )}
          {canVote && !secretActive && (
            <button type="button" className="ghost" onClick={onReveal}>
              Revelar impostor
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
              Cancelar votacion secreta
            </button>
          )}
          <button type="button" className="ghost" onClick={() => dispatch({ type: 'RESET_GAME' })}>
            Nueva partida
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reveal;
