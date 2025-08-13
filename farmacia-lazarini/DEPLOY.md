# 🚀 Deploy a GitHub Pages

## Configuración Automática (Recomendado)

### 1. Habilitar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda la configuración

### 2. Hacer Push del Código
```bash
git add .
git commit -m "Configuración para GitHub Pages"
git push origin main
```

### 3. Verificar el Deploy
- Ve a la pestaña **Actions** en tu repositorio
- El workflow se ejecutará automáticamente
- Una vez completado, tu sitio estará disponible en:
  `https://ariel200609.github.io/FarmaciaLazarini/`

## Configuración Manual (Alternativa)

Si prefieres hacer el deploy manualmente:

```bash
# Instalar dependencias
npm install

# Hacer build
npm run build

# Deploy con gh-pages
npm run deploy
```

## Estructura de URLs

Tu aplicación está configurada para funcionar en:
- **Desarrollo**: `http://localhost:3000/`
- **Producción**: `https://ariel200609.github.io/FarmaciaLazarini/`

## Rutas Disponibles

- `/` - Página principal
- `/bonifacio` - Sucursal Bonifacio
- `/guamini` - Sucursal Guamini

## Solución de Problemas

### Error 404 en GitHub Pages
- Verifica que el `base` en `vite.config.ts` sea `/FarmaciaLazarini/`
- Asegúrate de que la rama `gh-pages` se haya creado correctamente

### Rutas no funcionan
- Verifica que estés accediendo desde la URL correcta con `/FarmaciaLazarini/`
- Las rutas relativas deben funcionar correctamente

## Notas Importantes

- El deploy automático se ejecuta cada vez que haces push a `main`
- Los cambios pueden tardar unos minutos en estar disponibles
- Verifica siempre que el build sea exitoso en la pestaña Actions
