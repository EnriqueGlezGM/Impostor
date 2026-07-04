import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const cloneStrokes = (strokes) =>
  Array.isArray(strokes)
    ? strokes.map((stroke) => ({
        ...stroke,
        points: Array.isArray(stroke.points)
          ? stroke.points.map((point) => ({ ...point }))
          : [],
      }))
    : [];

const DrawingBoard = forwardRef(
  ({
    color,
    brushSize,
    ariaLabel,
    canDraw = true,
    drawStrokes = [],
    onStrokesChange,
    onStrokeEnd,
    ownerId,
    strokeGroup,
    toolMode = 'draw',
  }, ref) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const strokesRef = useRef([]);
  const drawingRef = useRef(false);
  const sizeRef = useRef({ width: 0, height: 0 });

  const emitStrokesChange = () => {
    if (typeof onStrokesChange === 'function') {
      onStrokesChange(cloneStrokes(strokesRef.current));
    }
  };

  const redraw = () => {
    const ctx = contextRef.current;
    const { width, height } = sizeRef.current;
    if (!ctx || width === 0 || height === 0) return;

    ctx.clearRect(0, 0, width, height);
    strokesRef.current.forEach((stroke) => {
      if (!stroke.points.length) return;
      ctx.globalCompositeOperation = stroke.mode === 'erase' ? 'destination-out' : 'source-over';
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.beginPath();
      const first = stroke.points[0];
      ctx.moveTo(first.x * width, first.y * height);
      stroke.points.slice(1).forEach((point) => {
        ctx.lineTo(point.x * width, point.y * height);
      });
      ctx.stroke();
      if (stroke.points.length === 1) {
        ctx.fillStyle = stroke.color;
        ctx.beginPath();
        ctx.arc(first.x * width, first.y * height, stroke.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalCompositeOperation = 'source-over';
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      strokesRef.current = [];
      redraw();
      emitStrokesChange();
    },
    clearOwner: (targetOwner) => {
      const strokes = strokesRef.current;
      if (targetOwner === undefined || !strokes.length) return false;
      const nextStrokes = strokes.filter((stroke) => stroke.owner !== targetOwner);
      if (nextStrokes.length === strokes.length) return false;
      strokesRef.current = nextStrokes;
      redraw();
      emitStrokesChange();
      return true;
    },
    clearGroup: (targetGroup) => {
      const strokes = strokesRef.current;
      if (!targetGroup || !strokes.length) return false;
      const nextStrokes = strokes.filter((stroke) => stroke.group !== targetGroup);
      if (nextStrokes.length === strokes.length) return false;
      strokesRef.current = nextStrokes;
      redraw();
      emitStrokesChange();
      return true;
    },
    undo: (targetOwner) => {
      const strokes = strokesRef.current;
      if (!strokes.length) return false;
      for (let i = strokes.length - 1; i >= 0; i -= 1) {
        const stroke = strokes[i];
        if (targetOwner === undefined || stroke.owner === targetOwner) {
          strokes.splice(i, 1);
          redraw();
          emitStrokesChange();
          return true;
        }
      }
      return false;
    },
  }));

  useEffect(() => {
    if (drawingRef.current) return;
    strokesRef.current = cloneStrokes(drawStrokes);
    redraw();
  }, [drawStrokes]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return undefined;

    const handleResize = () => {
      const rect = wrapper.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      sizeRef.current = { width: rect.width, height: rect.height };
      contextRef.current = ctx;
      redraw();
    };

    handleResize();

    let resizeObserver;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(wrapper);
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const getPoint = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    return {
      x: Math.min(Math.max(x, 0), 1),
      y: Math.min(Math.max(y, 0), 1),
    };
  };

  const drawSegment = (stroke, from, to) => {
    const ctx = contextRef.current;
    const { width, height } = sizeRef.current;
    if (!ctx || !from || !to) return;
    ctx.globalCompositeOperation = stroke.mode === 'erase' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = stroke.size;
    ctx.beginPath();
    ctx.moveTo(from.x * width, from.y * height);
    ctx.lineTo(to.x * width, to.y * height);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
  };

  const drawDot = (stroke, point) => {
    const ctx = contextRef.current;
    const { width, height } = sizeRef.current;
    if (!ctx || !point) return;
    ctx.globalCompositeOperation = stroke.mode === 'erase' ? 'destination-out' : 'source-over';
    ctx.fillStyle = stroke.color;
    ctx.beginPath();
    ctx.arc(point.x * width, point.y * height, stroke.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!canDraw) return;
    event.preventDefault();

    const point = getPoint(event);
    if (!point) return;

    canvas.setPointerCapture(event.pointerId);
    drawingRef.current = true;

    const mode = toolMode === 'erase' ? 'erase' : 'draw';
    const stroke = {
      color: color || '#1b1b1b',
      size: brushSize || 6,
      mode,
      owner: ownerId,
      group: strokeGroup,
      points: [point],
    };
    strokesRef.current.push(stroke);
    drawDot(stroke, point);
  };

  const handlePointerMove = (event) => {
    if (!drawingRef.current) return;
    const point = getPoint(event);
    if (!point) return;

    const strokes = strokesRef.current;
    const stroke = strokes[strokes.length - 1];
    if (!stroke) return;

    const prevPoint = stroke.points[stroke.points.length - 1];
    stroke.points.push(point);
    drawSegment(stroke, prevPoint, point);
  };

  const endStroke = (event) => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    if (event?.pointerId !== undefined && canvasRef.current) {
      canvasRef.current.releasePointerCapture(event.pointerId);
    }
    if (typeof onStrokeEnd === 'function') {
      const strokes = strokesRef.current;
      onStrokeEnd(strokes[strokes.length - 1]);
    }
    emitStrokesChange();
  };

  return (
    <div
      ref={wrapperRef}
      className={`drawing-board${canDraw ? '' : ' drawing-board--disabled'}${
        toolMode === 'erase' ? ' drawing-board--eraser' : ''
      }`}
    >
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        aria-label={ariaLabel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endStroke}
        onPointerLeave={endStroke}
        onPointerCancel={endStroke}
      />
    </div>
  );
});

DrawingBoard.displayName = 'DrawingBoard';

export default DrawingBoard;
