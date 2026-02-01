import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import DrawingBoard from './DrawingBoard.jsx';
import Timer from './Timer.jsx';
import { buildDealOrder, DEFAULT_PLAYER_COLORS } from '../utils.js';
import { formatString, getStrings } from '../i18n.js';

const Round = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const isDrawMode = state.gameMode === 'draw';
  const boardRef = useRef(null);
  const [brushSize, setBrushSize] = useState(8);
  const [strokeColor, setStrokeColor] = useState('');
  const [drawState, setDrawState] = useState({
    turnIndex: 0,
    completedPlayers: [],
    round: 1,
  });
  const drawOrder = useMemo(() => buildDealOrder(state.players.length), [state.players.length]);
  const completedSet = useMemo(
    () => new Set(drawState.completedPlayers),
    [drawState.completedPlayers]
  );
  const currentTurnIndex = drawOrder.length
    ? drawState.turnIndex % drawOrder.length
    : 0;
  const activeIndex = drawOrder.length ? drawOrder[currentTurnIndex] : 0;
  const activePlayer = state.players[activeIndex] || {
    name: t.common.playerLabel,
    color: '#9aa0a6',
  };
  const activeStrokeColor = state.drawAllowColorPick
    ? strokeColor || activePlayer.color
    : activePlayer.color;
  const currentCompleted = completedSet.has(activeIndex);
  const completedCount = drawState.completedPlayers.length;
  const roundNumber = drawState.round;
  const roundComplete =
    isDrawMode && state.drawLimitStrokes && completedCount >= drawOrder.length;
  const canDraw =
    isDrawMode && !roundComplete && (!state.drawLimitStrokes || !currentCompleted);

  useEffect(() => {
    setDrawState({ turnIndex: 0, completedPlayers: [], round: 1 });
  }, [state.players.length, state.gameMode]);

  useEffect(() => {
    if (!isDrawMode) return;
    setStrokeColor(activePlayer.color || '#1b1b1b');
  }, [activeIndex, activePlayer.color, isDrawMode]);

  const markCurrentCompleted = () => {
    if (!state.drawLimitStrokes || !drawOrder.length) return;
    setDrawState((current) => {
      const currentIndex = drawOrder.length
        ? current.turnIndex % drawOrder.length
        : 0;
      const playerIndex = drawOrder.length ? drawOrder[currentIndex] : 0;
      if (current.completedPlayers.includes(playerIndex)) {
        return current;
      }
      return {
        ...current,
        completedPlayers: [...current.completedPlayers, playerIndex],
      };
    });
  };

  const findNextTurnIndex = (startIndex, completed) => {
    if (!drawOrder.length) return -1;
    for (let i = 1; i <= drawOrder.length; i += 1) {
      const index = (startIndex + i) % drawOrder.length;
      const playerIndex = drawOrder[index];
      if (!completed.has(playerIndex)) {
        return index;
      }
    }
    return -1;
  };

  const onNextTurn = () => {
    if (!drawOrder.length) return;
    if (state.drawLimitStrokes) {
      setDrawState((current) => {
        if (!drawOrder.length) return current;
        const currentIndex = current.turnIndex % drawOrder.length;
        const playerIndex = drawOrder[currentIndex];
        const completed = new Set(current.completedPlayers);
        completed.add(playerIndex);
        const nextIndex = findNextTurnIndex(current.turnIndex, completed);
        if (nextIndex === -1) {
          return {
            ...current,
            completedPlayers: Array.from(completed),
          };
        }
        return {
          ...current,
          completedPlayers: Array.from(completed),
          turnIndex: nextIndex,
        };
      });
      return;
    }
    setDrawState((current) => ({
      ...current,
      turnIndex: (current.turnIndex + 1) % drawOrder.length,
    }));
  };

  const onUndo = () => {
    const removed = boardRef.current?.undo(activeIndex);
    if (removed && state.drawLimitStrokes) {
      setDrawState((current) => ({
        ...current,
        completedPlayers: current.completedPlayers.filter((id) => id !== activeIndex),
      }));
    }
  };

  const onNextRound = () => {
    setDrawState((current) => ({
      turnIndex: 0,
      completedPlayers: [],
      round: current.round + 1,
    }));
  };

  return (
    <section className="screen">
      <div className="card">
        <h2>{isDrawMode ? t.round.drawRound : t.round.wordRound}</h2>
        {!isDrawMode && <p className="muted">{t.round.wordIntro}</p>}
        {isDrawMode && (
          <div className="drawing-panel">
            <div className="drawing-header">
              <div>
                {roundComplete ? (
                  <p className="muted">{t.round.allDone}</p>
                ) : (
                  <p className="muted">
                    {t.round.turnOf}{' '}
                    <span className="player-tag" style={{ '--player-color': activePlayer.color }}>
                      {activePlayer.name}
                    </span>
                    .{' '}
                    {state.drawLimitStrokes ? t.round.drawAndNext : t.round.drawAndPass}
                  </p>
                )}
                {state.drawLimitStrokes && (
                  <span className="helper">
                    {formatString(t.round.strokesDone, {
                      done: completedCount,
                      total: drawOrder.length,
                    })}
                  </span>
                )}
                {state.drawLimitStrokes && currentCompleted && !roundComplete && (
                  <span className="helper">{t.round.strokeReady}</span>
                )}
                {state.drawLimitStrokes && (
                  <span className="badge">
                    {formatString(t.round.roundCount, { round: roundNumber })}
                  </span>
                )}
              </div>
              <div className="toggle">
                {state.drawLimitStrokes && roundComplete && (
                  <button type="button" className="chip" onClick={onNextRound}>
                    {t.round.newRound}
                  </button>
                )}
                <button
                  type="button"
                  className="icon-button icon-button--soft"
                  onClick={onNextTurn}
                  disabled={roundComplete}
                  aria-label={state.drawLimitStrokes ? t.round.nextPlayer : t.round.nextStroke}
                  title={state.drawLimitStrokes ? t.round.nextPlayer : t.round.nextStroke}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 12h13m0 0-4-4m4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <DrawingBoard
              ref={boardRef}
              color={activeStrokeColor}
              brushSize={brushSize}
              ariaLabel={t.round.boardLabel}
              canDraw={canDraw}
              onStrokeEnd={markCurrentCompleted}
              ownerId={activeIndex}
            />
            <div className="drawing-toolbar">
              {state.drawAllowColorPick && (
                <div className="drawing-palette">
                  <span className="helper">{t.round.strokeColor}</span>
                  <div className="palette">
                    {DEFAULT_PLAYER_COLORS.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`color-swatch${
                          activeStrokeColor === color ? ' color-swatch--active' : ''
                        }`}
                        style={{ '--swatch-color': color }}
                        onClick={() => setStrokeColor(color)}
                        aria-pressed={activeStrokeColor === color}
                        aria-label={t.round.selectColor}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="toggle">
                <button
                  type="button"
                  className={brushSize === 4 ? 'chip chip--active' : 'chip'}
                  onClick={() => setBrushSize(4)}
                >
                  {t.round.thin}
                </button>
                <button
                  type="button"
                  className={brushSize === 8 ? 'chip chip--active' : 'chip'}
                  onClick={() => setBrushSize(8)}
                >
                  {t.round.medium}
                </button>
                <button
                  type="button"
                  className={brushSize === 14 ? 'chip chip--active' : 'chip'}
                  onClick={() => setBrushSize(14)}
                >
                  {t.round.thick}
                </button>
              </div>
              <button
                type="button"
                className="icon-button icon-button--soft icon-button--glyph"
                onClick={onUndo}
                aria-label={t.round.undo}
                title={t.round.undo}
              >
                ↶
              </button>
            </div>
          </div>
        )}
        {state.timerEnabled && <Timer seconds={state.timerSeconds} />}
        <button type="button" className="primary" onClick={() => dispatch({ type: 'END_ROUND' })}>
          {t.round.endRound}
        </button>
      </div>
    </section>
  );
};

export default Round;
