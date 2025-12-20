import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils.js';

const Timer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    setTimeLeft(seconds);
    setRunning(true);
  }, [seconds]);

  useEffect(() => {
    if (!running) return undefined;
    if (timeLeft <= 0) return undefined;

    const id = window.setInterval(() => {
      setTimeLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [running, timeLeft]);

  const onReset = () => {
    setTimeLeft(seconds);
    setRunning(true);
  };

  return (
    <div className="timer">
      <div className={`timer__face ${timeLeft === 0 ? 'timer__face--done' : ''}`}>
        {formatTime(timeLeft)}
      </div>
      <div className="timer__actions">
        <button type="button" className="chip" onClick={() => setRunning((prev) => !prev)}>
          {running ? 'Pausar' : 'Continuar'}
        </button>
        <button type="button" className="chip" onClick={onReset}>
          Reiniciar
        </button>
      </div>
      {timeLeft === 0 && <p className="muted">Tiempo agotado. Finaliza la ronda cuando quieras.</p>}
    </div>
  );
};

export default Timer;
