import React, { useEffect, useState } from 'react';
import { GameProvider, useGame } from './state/GameContext.jsx';
import Home from './components/Home.jsx';
import Setup from './components/Setup.jsx';
import Deal from './components/Deal.jsx';
import Round from './components/Round.jsx';
import Reveal from './components/Reveal.jsx';
import { getStrings } from './i18n.js';

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

const Screen = ({ onShowHelp, onToggleTheme, isDark }) => {
  const { state } = useGame();

  switch (state.screen) {
    case 'home':
      return (
        <Home
          onShowHelp={onShowHelp}
          onToggleTheme={onToggleTheme}
          isDark={isDark}
        />
      );
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
  const t = getStrings(state.language);
  const showExit = state.screen !== 'setup' && state.screen !== 'home';
  const [theme, setTheme] = useState(getInitialTheme);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      // Ignore storage errors.
    }
  }, [theme]);

  const onExit = () => {
    const confirmed = window.confirm(t.app.exitConfirm);
    if (confirmed) {
      dispatch({ type: 'RESET_GAME' });
      dispatch({ type: 'GO_HOME' });
    }
  };

  return (
    <div className="app">
      <main className="app__main">
        <Screen
          onShowHelp={() => setShowHelp(true)}
          onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          isDark={theme === 'dark'}
        />
      </main>
      {showHelp && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={t.app.helpTitle}
            onClick={(event) => event.stopPropagation()}
          >
            <h2>{t.app.helpTitle}</h2>
            <ol className="modal__list">
              {t.app.helpSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="modal__actions">
              <button type="button" className="primary" onClick={() => setShowHelp(false)}>
                {t.app.helpClose}
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="app__footer">
        {showExit && (
          <button type="button" className="ghost footer-exit" onClick={onExit}>
            {t.app.endGame}
          </button>
        )}
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
