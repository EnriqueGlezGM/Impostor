# Impostor

## Desarrollo local

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Deploy en GitHub Pages

El repositorio es `https://github.com/EnriqueGlezGM/Impostor`, y el `base` ya está configurado en `vite.config.js` como `/Impostor/`.

1. Genera el build:
   ```bash
   npm run build
   ```
2. Publica la carpeta `dist` en GitHub Pages:
   ```bash
   npx gh-pages -d dist
   ```
3. En GitHub, ve a **Settings → Pages** y selecciona:
   - Source: `gh-pages`
   - Folder: `/ (root)`
