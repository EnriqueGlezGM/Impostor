import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  buildDealOrder,
  buildDefaultPlayers,
  clamp,
  normalizePlayers,
  pickImpostors,
} from '../utils.js';

const STORAGE_KEY = 'impostor-game-state-v1';
const MIN_PLAYERS_FOR_IMPOSTOR_WIN = 2;

const createFreshState = () => {
  const playerCount = 5;
  return {
    screen: 'home',
    playerCount,
    players: buildDefaultPlayers(playerCount),
    gameMode: 'word',
    drawAllowColorPick: true,
    drawLimitStrokes: true,
    word: '',
    wordHint: '',
    hintsEnabled: true,
    categoryMode: 'all',
    selectedCategories: [],
    timerEnabled: false,
    timerSeconds: 180,
    allowMultipleImpostors: false,
    impostorCount: 1,
    impostorIndices: [],
    dealOrder: [],
    dealStep: 0,
    showRole: false,
    revealImpostor: false,
    alivePlayers: [],
    winner: null,
    lastVote: null,
    voteMode: 'public',
    secretVoteOrder: [],
    secretVoteStep: 0,
    secretVotes: [],
    tieCandidates: [],
  };
};

const hydrateState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createFreshState();
    }
    const parsed = JSON.parse(raw);
    const playerCount = clamp(parsed.playerCount || 5, 3, 15);
    const {
      useCategory,
      category,
      keepSameImpostor,
      lastImpostorIndex,
      impostorIndex,
      ...rest
    } = parsed;
    const gameMode = parsed.gameMode === 'draw' ? 'draw' : 'word';
    const drawAllowColorPick =
      typeof parsed.drawAllowColorPick === 'boolean' ? parsed.drawAllowColorPick : true;
    const drawLimitStrokes =
      typeof parsed.drawLimitStrokes === 'boolean' ? parsed.drawLimitStrokes : true;
    const rawAlive = Array.isArray(parsed.alivePlayers)
      ? parsed.alivePlayers.filter(
          (id) => Number.isInteger(id) && id >= 0 && id < playerCount
        )
      : [];
    const alivePlayers = rawAlive.length
      ? rawAlive
      : Array.from({ length: playerCount }, (_, index) => index);

    const tieCandidates = Array.isArray(parsed.tieCandidates)
      ? parsed.tieCandidates
          .filter((id) => Number.isInteger(id) && id >= 0 && id < playerCount)
          .filter((id) => alivePlayers.includes(id))
      : [];

    const selectedCategories = Array.isArray(parsed.selectedCategories)
      ? parsed.selectedCategories.filter((category) => typeof category === 'string')
      : [];

    const impostorIndices = Array.isArray(parsed.impostorIndices)
      ? parsed.impostorIndices.filter(
          (id) => Number.isInteger(id) && id >= 0 && id < playerCount
        )
      : Number.isInteger(impostorIndex)
        ? [impostorIndex]
        : [];

    return {
      ...createFreshState(),
      ...rest,
      playerCount,
      players: normalizePlayers(playerCount, parsed.players || []),
      gameMode,
      drawAllowColorPick,
      drawLimitStrokes,
      hintsEnabled: typeof parsed.hintsEnabled === 'boolean' ? parsed.hintsEnabled : true,
      categoryMode: parsed.categoryMode === 'custom' ? 'custom' : 'all',
      selectedCategories,
      wordHint: parsed.wordHint || '',
      voteMode: parsed.voteMode === 'secret' ? 'secret' : 'public',
      secretVoteOrder: Array.isArray(parsed.secretVoteOrder) ? parsed.secretVoteOrder : [],
      secretVoteStep: Number.isInteger(parsed.secretVoteStep) ? parsed.secretVoteStep : 0,
      secretVotes: Array.isArray(parsed.secretVotes) ? parsed.secretVotes : [],
      alivePlayers,
      tieCandidates,
      allowMultipleImpostors:
        typeof parsed.allowMultipleImpostors === 'boolean'
          ? parsed.allowMultipleImpostors
          : (parsed.impostorCount || impostorIndices.length || 1) > 1,
      impostorCount: Math.max(
        1,
        Math.min(parsed.impostorCount || impostorIndices.length || 1, playerCount)
      ),
      impostorIndices,
    };
  } catch (error) {
    return createFreshState();
  }
};

const GameContext = createContext(null);

const resolveVote = (state, target) => {
  if (state.winner || state.revealImpostor) {
    return state;
  }
  if (!state.alivePlayers.includes(target)) {
    return state;
  }

  const targetName = state.players[target]?.name || 'Jugador';
  const targetColor = state.players[target]?.color || '#9aa0a6';
  const remainingPlayers = state.alivePlayers.filter((id) => id !== target);
  const impostorsAlive = state.impostorIndices.filter((id) => remainingPlayers.includes(id)).length;
  const innocentsAlive = remainingPlayers.length - impostorsAlive;
  const isImpostor = state.impostorIndices.includes(target);

  if (isImpostor) {
    const allImpostors = state.impostorIndices.length === state.players.length;
    let winner = impostorsAlive === 0 ? 'innocents' : null;
    if (allImpostors && remainingPlayers.length <= MIN_PLAYERS_FOR_IMPOSTOR_WIN) {
      winner = 'impostor';
    }
    return {
      ...state,
      alivePlayers: remainingPlayers,
      winner,
      lastVote: {
        status: 'correct',
        name: targetName,
        index: target,
        color: targetColor,
        remainingImpostors: impostorsAlive,
      },
    };
  }

  const winner =
    impostorsAlive > 0 && remainingPlayers.length <= MIN_PLAYERS_FOR_IMPOSTOR_WIN
      ? 'impostor'
      : null;

  return {
    ...state,
    alivePlayers: remainingPlayers,
    winner,
    lastVote: {
      status: 'wrong',
      name: targetName,
      index: target,
      color: targetColor,
      remainingInnocents: innocentsAlive,
    },
  };
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'GO_HOME':
      return {
        ...state,
        screen: 'home',
      };
    case 'START_SETUP':
      return {
        ...state,
        screen: 'setup',
      };
    case 'SET_PLAYER_COUNT': {
      const playerCount = clamp(action.payload, 3, 15);
      return {
        ...state,
        playerCount,
        players: normalizePlayers(playerCount, state.players),
        impostorCount: state.allowMultipleImpostors
          ? Math.min(state.impostorCount, playerCount)
          : 1,
      };
    }
    case 'SET_PLAYER_NAME': {
      const { index, name } = action.payload;
      const players = [...state.players];
      const current = players[index] || { name: '', color: '' };
      players[index] = { ...current, name };
      return {
        ...state,
        players,
      };
    }
    case 'SET_PLAYER_COLOR': {
      const { index, color } = action.payload;
      const players = [...state.players];
      const current = players[index] || { name: '', color: '' };
      players[index] = { ...current, color };
      return {
        ...state,
        players,
      };
    }
    case 'SET_GAME_MODE':
      return {
        ...state,
        gameMode: action.payload === 'draw' ? 'draw' : 'word',
      };
    case 'SET_DRAW_ALLOW_COLOR_PICK':
      return {
        ...state,
        drawAllowColorPick: action.payload === true,
      };
    case 'SET_DRAW_LIMIT_STROKES':
      return {
        ...state,
        drawLimitStrokes: action.payload === true,
      };
    case 'SET_WORD':
      return {
        ...state,
        word: action.payload,
      };
    case 'SET_WORD_HINT':
      return {
        ...state,
        wordHint: action.payload,
      };
    case 'SET_HINTS_ENABLED':
      return {
        ...state,
        hintsEnabled: action.payload,
      };
    case 'SET_CATEGORY_MODE':
      return {
        ...state,
        categoryMode: action.payload === 'custom' ? 'custom' : 'all',
      };
    case 'SET_SELECTED_CATEGORIES':
      return {
        ...state,
        selectedCategories: action.payload,
      };
    case 'SET_TIMER_ENABLED':
      return {
        ...state,
        timerEnabled: action.payload,
      };
    case 'SET_TIMER_SECONDS':
      return {
        ...state,
        timerSeconds: clamp(action.payload, 30, 900),
      };
    case 'SET_ALLOW_MULTIPLE_IMPOSTORS': {
      const allowMultipleImpostors = action.payload === true;
      return {
        ...state,
        allowMultipleImpostors,
        impostorCount: allowMultipleImpostors ? state.impostorCount : 1,
      };
    }
    case 'SET_IMPOSTOR_COUNT': {
      const count = Math.max(1, Math.min(action.payload, state.playerCount));
      return {
        ...state,
        impostorCount: count,
      };
    }
    case 'START_GAME': {
      const word = action.payload?.word ? String(action.payload.word) : state.word;
      const wordHint = action.payload?.wordHint ? String(action.payload.wordHint) : '';
      const impostorIndices = pickImpostors(state.players.length, state.impostorCount);
      return {
        ...state,
        screen: 'deal',
        word,
        wordHint,
        impostorIndices,
        dealOrder: buildDealOrder(state.players.length),
        dealStep: 0,
        showRole: false,
        revealImpostor: false,
        alivePlayers: Array.from({ length: state.players.length }, (_, index) => index),
        winner: null,
        lastVote: null,
        tieCandidates: [],
        secretVoteOrder: [],
        secretVoteStep: 0,
        secretVotes: [],
      };
    }
    case 'SHOW_ROLE':
      return {
        ...state,
        showRole: true,
      };
    case 'HIDE_ROLE':
      return {
        ...state,
        showRole: false,
        dealStep: state.dealStep + 1,
      };
    case 'START_ROUND':
      return {
        ...state,
        screen: state.timerEnabled || state.gameMode === 'draw' ? 'round' : 'reveal',
        revealImpostor: false,
      };
    case 'END_ROUND':
      return {
        ...state,
        screen: 'reveal',
        revealImpostor: false,
      };
    case 'REVEAL_IMPOSTOR':
      if (state.winner) {
        return state;
      }
      return {
        ...state,
        revealImpostor: true,
      };
    case 'PLAY_AGAIN':
      if (state.winner || state.revealImpostor) {
        return state;
      }
      return {
        ...state,
        screen: 'round',
      };
    case 'CAST_VOTE': {
      const target = action.payload;
      const resolved = resolveVote(state, target);
      if (resolved === state) {
        return state;
      }
      return {
        ...resolved,
        tieCandidates: [],
      };
    }
    case 'SET_VOTE_MODE':
      return {
        ...state,
        voteMode: action.payload === 'secret' ? 'secret' : 'public',
      };
    case 'START_SECRET_VOTE': {
      if (state.winner || state.revealImpostor) {
        return state;
      }
      const alivePlayers = state.alivePlayers.length
        ? state.alivePlayers
        : Array.from({ length: state.players.length }, (_, index) => index);
      return {
        ...state,
        voteMode: 'secret',
        secretVoteOrder: [...alivePlayers],
        secretVoteStep: 0,
        secretVotes: [],
        lastVote: null,
      };
    }
    case 'CANCEL_SECRET_VOTE':
      return {
        ...state,
        secretVoteOrder: [],
        secretVoteStep: 0,
        secretVotes: [],
      };
    case 'SUBMIT_SECRET_VOTE': {
      if (state.winner || state.revealImpostor) {
        return state;
      }
      if (!state.secretVoteOrder.length) {
        return state;
      }
      const currentVoter = state.secretVoteOrder[state.secretVoteStep];
      if (currentVoter === undefined) {
        return state;
      }
      const target = action.payload;
      if (!state.alivePlayers.includes(target)) {
        return state;
      }

      const nextVotes = [...state.secretVotes, { voter: currentVoter, target }];
      const nextStep = state.secretVoteStep + 1;

      if (nextStep < state.secretVoteOrder.length) {
        return {
          ...state,
          secretVotes: nextVotes,
          secretVoteStep: nextStep,
        };
      }

      const counts = new Map();
      nextVotes.forEach((vote) => {
        counts.set(vote.target, (counts.get(vote.target) || 0) + 1);
      });
      let maxVotes = 0;
      counts.forEach((value) => {
        if (value > maxVotes) maxVotes = value;
      });
      const topTargets = Array.from(counts.entries())
        .filter(([, value]) => value === maxVotes)
        .map(([targetIndex]) => targetIndex);
      if (topTargets.length > 1) {
        return {
          ...state,
          secretVoteOrder: [],
          secretVoteStep: 0,
          secretVotes: [],
          tieCandidates: topTargets,
          lastVote: {
            status: 'tie',
            names: topTargets.map((index) => state.players[index]?.name || 'Jugador'),
            indices: topTargets,
          },
        };
      }

      const clearedState = {
        ...state,
        secretVoteOrder: [],
        secretVoteStep: 0,
        secretVotes: [],
      };
      const resolved = resolveVote(clearedState, topTargets[0]);
      if (resolved === state) {
        return state;
      }
      return {
        ...resolved,
        tieCandidates: [],
      };
    }
    case 'RESET_GAME': {
      const baseState = createFreshState();
      return {
        ...baseState,
        playerCount: state.playerCount,
        players: normalizePlayers(state.playerCount, state.players),
        gameMode: state.gameMode,
        drawAllowColorPick: state.drawAllowColorPick,
        drawLimitStrokes: state.drawLimitStrokes,
        hintsEnabled: state.hintsEnabled,
        categoryMode: state.categoryMode,
        selectedCategories: state.selectedCategories,
        timerEnabled: state.timerEnabled,
        timerSeconds: state.timerSeconds,
        voteMode: state.voteMode,
        allowMultipleImpostors: state.allowMultipleImpostors,
        impostorCount: state.impostorCount,
      };
    }
    case 'RESET_ALL':
      return createFreshState();
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, undefined, hydrateState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};
