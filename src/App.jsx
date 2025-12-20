import React, { useEffect, useState } from 'react';
import { GameProvider, useGame } from './state/GameContext.jsx';
import Setup from './components/Setup.jsx';
import Deal from './components/Deal.jsx';
import Round from './components/Round.jsx';
import Reveal from './components/Reveal.jsx';

const THEME_KEY = 'impostor-theme';

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch (error) {
    // Ignore storage errors and fall back to default.
  }
  return 'dark';
};

const Screen = () => {
  const { state } = useGame();

  switch (state.screen) {
    case 'deal':
      return <Deal />;
    case 'round':
      return <Round />;
    case 'reveal':
      return <Reveal />;
    case 'setup':
    default:
      return <Setup />;
  }
};

const AppLayout = () => {
  const { state, dispatch } = useGame();
  const showExit = state.screen !== 'setup';
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      // Ignore storage errors.
    }
  }, [theme]);

  const onExit = () => {
    const confirmed = window.confirm('Finalizar partida y volver a configuracion?');
    if (confirmed) {
      dispatch({ type: 'RESET_GAME' });
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Juego de deducción social</p>
          <h1>El Impostor</h1>
        </div>
        <button
          type="button"
          className="mode-toggle"
          onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          aria-pressed={theme === 'dark'}
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? (
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
      </header>
      <main className="app__main">
        <Screen />
      </main>
      {showExit && (
        <div className="floating-exit">
          <button type="button" className="ghost" onClick={onExit}>
            Finalizar partida
          </button>
        </div>
      )}
      <footer className="app__footer">
        <span>Diseñado para jugar en móvil, en ronda y sin prisas.</span>
      </footer>
    </div>
  );
};

const App = () => (
  <GameProvider>
    <AppLayout />
  </GameProvider>
);

export default App;
