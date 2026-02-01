import React, { useEffect, useRef, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import { formatTime } from '../utils.js';
import { getStrings } from '../i18n.js';

const Timer = ({ seconds }) => {
  const { state } = useGame();
  const t = getStrings(state.language);
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [running, setRunning] = useState(true);
  const beepedRef = useRef(false);

  useEffect(() => {
    setTimeLeft(seconds);
    setRunning(true);
    beepedRef.current = false;
  }, [seconds]);

  useEffect(() => {
    if (!running) return undefined;
    if (timeLeft <= 0) return undefined;

    const id = window.setInterval(() => {
      setTimeLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [running, timeLeft]);

  useEffect(() => {
    if (timeLeft !== 0 || beepedRef.current) return;

    const playAlarm = () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const gain = context.createGain();

        oscillator.type = 'square';
        gain.gain.value = 0.0001;

        oscillator.connect(gain);
        gain.connect(context.destination);

        const now = context.currentTime;
        const pulse = (start, frequency) => {
          oscillator.frequency.setValueAtTime(frequency, start);
          gain.gain.setValueAtTime(0.0001, start);
          gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);
        };

        const pulses = 8;
        const gap = 0.18;
        for (let i = 0; i < pulses; i += 1) {
          pulse(now + i * gap, i % 2 === 0 ? 880 : 660);
        }

        oscillator.start(now);
        oscillator.stop(now + pulses * gap + 0.1);
        oscillator.onended = () => context.close();
      } catch (error) {
        // Ignore audio errors.
      }
    };

    playAlarm();
    beepedRef.current = true;
  }, [timeLeft]);

  const onReset = () => {
    setTimeLeft(seconds);
    setRunning(true);
    beepedRef.current = false;
  };

  return (
    <div className="timer">
      <div className={`timer__face ${timeLeft === 0 ? 'timer__face--done' : ''}`}>
        {formatTime(timeLeft)}
      </div>
      <div className="timer__actions">
        <button type="button" className="chip" onClick={() => setRunning((prev) => !prev)}>
          {running ? t.timer.pause : t.timer.resume}
        </button>
        <button type="button" className="chip" onClick={onReset}>
          {t.timer.reset}
        </button>
      </div>
      {timeLeft === 0 && <p className="muted">{t.timer.done}</p>}
    </div>
  );
};

export default Timer;
