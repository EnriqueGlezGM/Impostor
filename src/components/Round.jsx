import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGame } from '../state/GameContext.jsx';
import DrawingBoard from './DrawingBoard.jsx';
import Timer from './Timer.jsx';
import { buildDealOrder, DEFAULT_PLAYER_COLORS } from '../utils.js';
import { formatString, getStrings } from '../i18n.js';

const STROKE_COLORS = ['#111111', ...DEFAULT_PLAYER_COLORS];

const getRandomStartIndex = (count) => {
  if (count <= 1) return 0;
  return Math.floor(Math.random() * count);
};

const rotateOrder = (order, startIndex) => {
  if (!order.length) return order;
  const offset = ((startIndex % order.length) + order.length) % order.length;
  return [...order.slice(offset), ...order.slice(0, offset)];
};

const Round = () => {
  const { state, dispatch } = useGame();
  const t = getStrings(state.language);
  const isDrawMode = state.gameMode === 'draw';
  const boardRef = useRef(null);
  const [brushSize, setBrushSize] = useState(8);
  const [strokeColor, setStrokeColor] = useState('');
  const [toolMode, setToolMode] = useState('draw');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isEraserMenuOpen, setIsEraserMenuOpen] = useState(false);
  const [isBoardFullscreen, setIsBoardFullscreen] = useState(false);
  const [drawState, setDrawState] = useState(() => ({
    turnIndex: 0,
    turnId: 0,
    completedPlayers: [],
    round: 1,
    startIndex: getRandomStartIndex(state.players.length),
  }));
  const baseDrawOrder = useMemo(
    () => buildDealOrder(state.players.length),
    [state.players.length]
  );
  const drawOrder = useMemo(
    () => rotateOrder(baseDrawOrder, drawState.startIndex),
    [baseDrawOrder, drawState.startIndex]
  );
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
  const activeStrokeColor = strokeColor || activePlayer.color;
  const panelClassName = `drawing-panel${
    isBoardFullscreen ? ' drawing-panel--fullscreen' : ''
  }`;
  const currentCompleted = completedSet.has(activeIndex);
  const completedCount = drawState.completedPlayers.length;
  const roundNumber = drawState.round;
  const currentTurnKey = `${roundNumber}:${drawState.turnId}:${activeIndex}`;
  const roundComplete =
    isDrawMode && state.drawLimitStrokes && completedCount >= drawOrder.length;
  const canDraw =
    isDrawMode && !roundComplete && (!state.drawLimitStrokes || !currentCompleted);
  const canUseBoard = canDraw || (isDrawMode && toolMode === 'erase' && !roundComplete);

  useEffect(() => {
    setDrawState({
      turnIndex: 0,
      turnId: 0,
      completedPlayers: [],
      round: 1,
      startIndex: getRandomStartIndex(state.players.length),
    });
  }, [state.players.length, state.gameMode]);

  useEffect(() => {
    if (!isDrawMode) return;
    setStrokeColor(activePlayer.color || '#1b1b1b');
  }, [activeIndex, activePlayer.color, isDrawMode]);

  const markCurrentIncomplete = () => {
    setDrawState((current) => ({
      ...current,
      completedPlayers: current.completedPlayers.filter((id) => id !== activeIndex),
    }));
  };

  const markCurrentCompleted = (stroke) => {
    if (stroke?.mode === 'erase') return;
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
          turnId: current.turnId + 1,
        };
      });
      return;
    }
    setDrawState((current) => ({
      ...current,
      turnIndex: (current.turnIndex + 1) % drawOrder.length,
      turnId: current.turnId + 1,
    }));
  };

  const onNextRound = () => {
    setDrawState((current) => ({
      turnIndex: 0,
      turnId: 0,
      completedPlayers: [],
      round: current.round + 1,
      startIndex: drawOrder.length ? (current.startIndex + 1) % drawOrder.length : 0,
    }));
  };

  const onClearBoard = () => {
    boardRef.current?.clear();
  };

  const onEndRound = () => {
    setIsBoardFullscreen(false);
    dispatch({ type: 'END_ROUND' });
  };

  const onClearActivePlayer = () => {
    const cleared = boardRef.current?.clearGroup(currentTurnKey);
    if (cleared) {
      markCurrentIncomplete();
    }
    setToolMode('draw');
    setIsEraserMenuOpen(false);
  };

  const onToggleEraser = () => {
    if (state.drawLimitStrokes) {
      onClearActivePlayer();
      setIsPaletteOpen(false);
      return;
    }
    if (toolMode === 'erase') {
      setIsEraserMenuOpen((current) => !current);
      return;
    }
    setToolMode('erase');
    setIsPaletteOpen(false);
    setIsEraserMenuOpen(false);
  };

  return (
    <section className="screen">
      <div className="card">
        {!isDrawMode && <h2>{t.round.wordRound}</h2>}
        {!isDrawMode && <p className="muted">{t.round.wordIntro}</p>}
        {isDrawMode && (
          <div className={panelClassName}>
            <div className="drawing-header drawing-turn-bubble">
              <div className="drawing-turn-info">
                <span className="drawing-turn-label">
                  {roundComplete ? t.round.allDoneShort : t.round.turnOf}
                </span>
                {!roundComplete && (
                  <span className="player-tag" style={{ '--player-color': activePlayer.color }}>
                    {activePlayer.name}
                  </span>
                )}
                {state.drawLimitStrokes && (
                  <span
                    className={`turn-state${currentCompleted ? ' turn-state--locked' : ''}`}
                    aria-label={currentCompleted ? t.round.locked : t.round.canDraw}
                    title={currentCompleted ? t.round.locked : t.round.canDraw}
                  >
                    {currentCompleted ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M7 10V8a5 5 0 0 1 10 0v2M6 10h12v10H6V10Z"
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
                          d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
              <div className="drawing-actions">
                <button
                  type="button"
                  className="icon-button icon-button--soft"
                  onClick={() => setIsBoardFullscreen((current) => !current)}
                  aria-label={
                    isBoardFullscreen ? t.round.exitFullscreen : t.round.fullscreen
                  }
                  title={isBoardFullscreen ? t.round.exitFullscreen : t.round.fullscreen}
                >
                  {isBoardFullscreen ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M9 9H5V5m0 4 5-5M15 9h4V5m0 4-5-5M9 15H5v4m0-4 5 5M15 15h4v4m0-4-5 5"
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
                        d="M4 9V4h5M4 4l6 6M20 9V4h-5m5 0-6 6M4 15v5h5m-5 0 6-6M20 15v5h-5m5 0-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  )}
                </button>
                {state.drawLimitStrokes && roundComplete && (
                  <button
                    type="button"
                    className="icon-button icon-button--soft"
                    onClick={onClearBoard}
                    aria-label={t.round.clearBoard}
                    title={t.round.clearBoard}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </button>
                )}
                {state.drawLimitStrokes && roundComplete && (
                  <button
                    type="button"
                    className="icon-button icon-button--soft"
                    onClick={onNextRound}
                    aria-label={t.round.newRound}
                    title={t.round.newRound}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M20 12a8 8 0 1 1-2.3-5.7M20 4v6h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </button>
                )}
                {!roundComplete && (
                  <button
                    type="button"
                    className="icon-button icon-button--soft"
                    onClick={onNextTurn}
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
                )}
              </div>
            </div>
            <DrawingBoard
              ref={boardRef}
              color={activeStrokeColor}
              brushSize={brushSize}
              ariaLabel={t.round.boardLabel}
              canDraw={canUseBoard}
              onStrokeEnd={markCurrentCompleted}
              ownerId={activeIndex}
              strokeGroup={currentTurnKey}
              toolMode={toolMode}
            />
            <div className="drawing-toolbar drawing-tools-bubble">
              <div className="drawing-palette-menu">
                <button
                  type="button"
                  className={`icon-button icon-button--soft color-menu-button${
                    toolMode === 'draw' ? ' color-menu-button--active' : ''
                  }`}
                  onClick={() => {
                    if (toolMode === 'erase') {
                      setToolMode('draw');
                      setIsPaletteOpen(false);
                      setIsEraserMenuOpen(false);
                      return;
                    }
                    setIsEraserMenuOpen(false);
                    setIsPaletteOpen((current) => !current);
                  }}
                  aria-pressed={toolMode === 'draw'}
                  aria-expanded={isPaletteOpen}
                  aria-label={t.round.colorPalette}
                  title={t.round.colorPalette}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.3-3.1 1.25 1.25 0 0 1 .9-2.1H17a3 3 0 0 0 3-3A7.8 7.8 0 0 0 12 4Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8.2 11.2h.01M10 8h.01M13.5 7.6h.01M16 10.2h.01"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                  <span
                    className="color-menu-button__dot"
                    style={{ '--swatch-color': activeStrokeColor }}
                    aria-hidden="true"
                  />
                </button>
                {isPaletteOpen && (
                  <div className="palette-popover">
                    <span className="helper">{t.round.strokeColor}</span>
                    <div className="palette">
                      {STROKE_COLORS.map((color) => (
                        <button
                          key={color}
                          type="button"
                          className={`color-swatch${
                            activeStrokeColor === color ? ' color-swatch--active' : ''
                          }`}
                          style={{ '--swatch-color': color }}
                          onClick={() => {
                            setStrokeColor(color);
                            setToolMode('draw');
                            setIsPaletteOpen(false);
                            setIsEraserMenuOpen(false);
                          }}
                          aria-pressed={activeStrokeColor === color}
                          aria-label={t.round.selectColor}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="brush-control">
                <span className="helper">{t.round.brushSize}</span>
                <label className="brush-slider">
                  <span
                    className="brush-preview"
                    style={{
                      '--brush-size': `${brushSize}px`,
                      '--brush-color': activeStrokeColor,
                    }}
                    aria-hidden="true"
                  />
                  <input
                    type="range"
                    min={3}
                    max={22}
                    value={brushSize}
                    onChange={(event) => setBrushSize(Number(event.target.value))}
                    aria-label={t.round.brushSize}
                  />
                </label>
              </div>
              <div className="drawing-eraser-menu">
                <button
                  type="button"
                  className={`icon-button icon-button--soft${
                    toolMode === 'erase' ? ' icon-button--active' : ''
                  }`}
                  onClick={onToggleEraser}
                  aria-pressed={toolMode === 'erase'}
                  aria-expanded={!state.drawLimitStrokes ? isEraserMenuOpen : undefined}
                  aria-label={t.round.eraser}
                  title={t.round.eraser}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="m4 15 8-8a2.5 2.5 0 0 1 3.5 0L20 11.5a2.5 2.5 0 0 1 0 3.5l-4 4H8l-4-4Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m9 10 6 6M7.5 19H21"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
                {!state.drawLimitStrokes && isEraserMenuOpen && (
                  <div className="palette-popover eraser-popover">
                    <span className="helper">{t.round.eraserOptions}</span>
                    <button
                      type="button"
                      className="chip"
                      onClick={onClearActivePlayer}
                    >
                      {t.round.clearCurrentTurn}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {state.timerEnabled && <Timer seconds={state.timerSeconds} />}
        <button type="button" className="primary" onClick={onEndRound}>
          {t.round.endRound}
        </button>
      </div>
    </section>
  );
};

export default Round;
