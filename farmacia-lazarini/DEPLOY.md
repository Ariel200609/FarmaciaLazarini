# Instrucciones para Deploy en GitHub Pages

## Configuración Inicial

1. **Asegúrate de que tu repositorio se llame exactamente `FarmaciaLazarini`**
2. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## Pasos para Deploy

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Construye el proyecto:**
   ```bash
   npm run build
   ```

3. **Despliega a GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Verificación

- El deploy puede tomar unos minutos
- Verifica que la URL sea: `https://tu-usuario.github.io/FarmaciaLazarini/`
- Si ves una página en blanco, espera unos minutos y recarga

## Solución de Problemas

### Página en Blanco
- Verifica que el repositorio se llame exactamente `FarmaciaLazarini`
- Asegúrate de que GitHub Pages esté configurado en la rama `gh-pages`
- Espera 5-10 minutos después del deploy

### Errores de Rutas
- El archivo `404.html` maneja las rutas de React Router
- El script en `index.html` restaura las URLs correctas

### Errores de Build
- Ejecuta `npm run build` localmente para ver errores
- Verifica que TypeScript compile sin errores
