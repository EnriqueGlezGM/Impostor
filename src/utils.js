export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const shuffle = (list) => {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const DEFAULT_PLAYER_COLORS = [
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

const splitCsvLine = (line) => {
  const delimiter = line.includes(';') ? ';' : ',';
  return line.split(delimiter).map((part) => part.trim());
};

const normalizeCategoryName = (name) =>
  name.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();

const parseIconMeta = (line) => {
  const cleaned = line.replace(/^#|^\/\//, '').trim();
  const match = cleaned.match(/^icon\s*[:=]\s*(.+)$/i);
  return match ? match[1].trim() : '';
};

export const parseCategoryFile = (rawText, category) => {
  if (!rawText) return { entries: [], icon: '' };
  const lines = rawText.split(/\r?\n/).map((line) => line.trim());
  let icon = '';
  const cleaned = lines.filter((line) => {
    if (!line) return false;
    if (line.startsWith('#') || line.startsWith('//')) {
      if (!icon) {
        const parsed = parseIconMeta(line);
        if (parsed) icon = parsed;
      }
      return false;
    }
    return true;
  });
  if (!cleaned.length) {
    return { entries: [], icon };
  }

  const entries = cleaned
    .map((line) => {
      const parts = splitCsvLine(line);
      return {
        category,
        word: parts[0] || '',
        hint: parts[1] || '',
      };
    })
    .filter((entry) => entry.word);

  return { entries, icon };
};

export const parseCategoryFiles = (files) => {
  const entries = [];
  const categories = new Set();
  const icons = {};

  Object.entries(files || {}).forEach(([path, raw]) => {
    const base = path.split('/').pop() || '';
    const name = normalizeCategoryName(base.replace(/\.csv$/i, ''));
    if (!name) return;
    const parsed = parseCategoryFile(raw, name);
    if (parsed.entries.length) {
      parsed.entries.forEach((entry) => entries.push(entry));
      categories.add(name);
      if (parsed.icon) {
        icons[name] = parsed.icon;
      }
    }
  });

  return {
    entries,
    categories: Array.from(categories).sort((a, b) => a.localeCompare(b, 'es')),
    icons,
  };
};

export const pickRandomEntry = (entries) => {
  if (!entries.length) return { category: '', word: '', hint: '' };
  const index = Math.floor(Math.random() * entries.length);
  return entries[index];
};
