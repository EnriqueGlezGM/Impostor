import React from 'react';
import { useGame } from '../state/GameContext.jsx';
import Timer from './Timer.jsx';

const Round = () => {
  const { state, dispatch } = useGame();

  return (
    <section className="screen">
      <div className="card">
        <h2>Ronda en marcha</h2>
        <p className="muted">
          Hablad en círculo, describid la palabra con una pista breve y tratad de descubrir
          quién no sabe de qué se habla.
        </p>
        {state.timerEnabled && <Timer seconds={state.timerSeconds} />}
        <button type="button" className="primary" onClick={() => dispatch({ type: 'END_ROUND' })}>
          Finalizar ronda
        </button>
      </div>
    </section>
  );
};

export default Round;
