import React from 'react';
import { useGame } from '../state/GameContext.jsx';
import { getStrings } from '../i18n.js';

const Home = ({ onShowHelp, onToggleTheme, isDark }) => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const isSpanish = state.language === 'es';

  return (
    <section className="screen">
      <div className="home-stack">
        <h1 className="home-title">{t.home.title}</h1>
        <div className="card card--center home-card">
          <p className="muted">{t.home.tagline}</p>
          <button
            type="button"
            className="primary home-start"
            onClick={() => dispatch({ type: 'START_SETUP' })}
          >
            {t.home.start}
          </button>
        </div>
        <div className="home-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onShowHelp}
            aria-label={t.home.helpLabel}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 7.5a2.5 2.5 0 0 1 2.5 2.5c0 1.2-.8 1.9-1.6 2.4-.7.5-.9.7-.9 1.6v.5M12 17.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <button
            type="button"
            className="icon-button icon-button--emoji"
            onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: isSpanish ? 'en' : 'es' })}
            aria-label={t.home.languageToggle}
          >
            {isSpanish ? '🇪🇸' : '🇬🇧'}
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? t.home.themeToLight : t.home.themeToDark}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3v2.25M12 18.75V21M4.219 4.219 5.47 5.47M18.53 18.53l1.25 1.25M3 12h2.25M18.75 12H21M4.219 19.781 5.47 18.53M18.53 5.47l1.25-1.25M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
