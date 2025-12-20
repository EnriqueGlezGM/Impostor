export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const shuffle = (list) => {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const DEFAULT_PLAYER_COLORS = [
  '#ff6b6b',
  '#f7b801',
  '#6adf7e',
  '#43bccd',
  '#5b7cfa',
  '#9b5de5',
  '#f15bb5',
  '#ff9f1c',
  '#2ec4b6',
  '#e71d36',
  '#3a86ff',
  '#8338ec',
  '#ff006e',
  '#fb5607',
  '#06d6a0',
];

export const defaultPlayerColor = (index) =>
  DEFAULT_PLAYER_COLORS[index % DEFAULT_PLAYER_COLORS.length];

export const buildDefaultPlayers = (count) =>
  Array.from({ length: count }, (_, index) => ({
    name: `Jugador ${index + 1}`,
    color: defaultPlayerColor(index),
  }));

export const normalizePlayers = (count, players) => {
  const next = Array.isArray(players) ? [...players] : [];

  const ensurePlayer = (player, index) => {
    if (typeof player === 'string') {
      return { name: player, color: defaultPlayerColor(index) };
    }
    if (player && typeof player === 'object') {
      return {
        name: player.name || `Jugador ${index + 1}`,
        color: player.color || defaultPlayerColor(index),
      };
    }
    return { name: `Jugador ${index + 1}`, color: defaultPlayerColor(index) };
  };

  if (next.length > count) {
    return next.slice(0, count).map(ensurePlayer);
  }

  while (next.length < count) {
    next.push(ensurePlayer(null, next.length));
  }

  return next.map(ensurePlayer);
};

export const buildDealOrder = (count) => Array.from({ length: count }, (_, i) => i);

export const pickImpostor = (count) => Math.floor(Math.random() * count);

export const pickImpostors = (count, impostorCount) => {
  const total = Math.max(1, Math.min(impostorCount, count));
  return shuffle(Array.from({ length: count }, (_, index) => index)).slice(0, total);
};

export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const parseWordEntries = (rawText) => {
  if (!rawText) return [];
  const lines = rawText.split(/\r?\n/).map((line) => line.trim());
  const cleaned = lines.filter((line) => line && !line.startsWith('#'));
  if (!cleaned.length) return [];

  const splitLine = (line) => {
    const delimiter = line.includes(';') ? ';' : ',';
    return line.split(delimiter).map((part) => part.trim());
  };

  const firstParts = splitLine(cleaned[0]);
  const headerParts = firstParts.map((part) => part.toLowerCase());
  const hasCategoryHeader =
    headerParts.includes('categoria') || headerParts.includes('category');
  const hasWordHeader = headerParts.includes('palabra') || headerParts.includes('word');
  const mode = hasCategoryHeader ? 'category' : 'wordHint';
  const startIndex = hasCategoryHeader || hasWordHeader ? 1 : 0;

  const entries = cleaned.slice(startIndex).map((line) => {
    const parts = splitLine(line);
    if (mode === 'category' || parts.length >= 3) {
      return {
        category: parts[0] || 'General',
        word: parts[1] || '',
        hint: parts[2] || '',
      };
    }
    return {
      category: 'General',
      word: parts[0] || '',
      hint: parts[1] || '',
    };
  });

  return entries.filter((entry) => entry.word);
};

export const pickRandomEntry = (entries) => {
  if (!entries.length) return { category: '', word: '', hint: '' };
  const index = Math.floor(Math.random() * entries.length);
  return entries[index];
};
