# 🚀 Deploy Manual para GitHub Pages

## ❌ Problema con gh-pages en Windows

El paquete `gh-pages` tiene problemas con nombres de archivos largos en Windows. Por eso usamos **deploy manual**.

## ✅ Solución: Deploy Manual

### **Paso 1: Build del Proyecto**
```bash
npm run build
```
✅ **Resultado esperado:** Carpeta `dist` creada con todos los archivos

### **Paso 2: Crear Rama gh-pages en GitHub**

1. Ve a tu repositorio: `https://github.com/tu-usuario/FarmaciaLazarini`
2. Click en el dropdown de ramas (probablemente dice "main")
3. Escribe `gh-pages` y presiona Enter
4. GitHub creará la rama automáticamente

### **Paso 3: Subir Archivos a gh-pages**

1. **En la rama gh-pages**, arrastra todos los archivos de la carpeta `dist`:
   - `index.html`
   - `404.html`
   - `.nojekyll`
   - `logo.webp`
   - `vite.svg`
   - Carpeta `assets/` completa

2. **Commit los cambios:**
   - Mensaje: `Deploy to GitHub Pages`
   - Click en "Commit changes"

### **Paso 4: Configurar GitHub Pages**

1. Ve a **Settings** > **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** gh-pages
4. **Folder:** / (root)
5. Click **Save**

### **Paso 5: Esperar y Verificar**

- ⏱️ **Tiempo de espera:** 5-10 minutos
- 🌐 **URL:** `https://tu-usuario.github.io/FarmaciaLazarini/`
- 🔄 **Si ves página en blanco:** Espera y recarga

## 📁 Archivos que Debes Subir

```
dist/
├── index.html          ← Archivo principal
├── 404.html           ← Maneja rutas de React Router
├── .nojekyll          ← Evita procesamiento de Jekyll
├── logo.webp          ← Logo de la farmacia
├── vite.svg           ← Icono de Vite
└── assets/
    ├── index-BJ87WQFw.js    ← JavaScript principal
    └── index-CB36SsuG.css   ← CSS principal
```

## 🛠️ Scripts Disponibles

```bash
# Build del proyecto
npm run build

# Deploy manual (muestra instrucciones)
npm run deploy:manual

# Script de PowerShell (Windows)
.\deploy-manual.ps1

# Script de Batch (Windows)
.\deploy-manual.bat
```

## 🔧 Solución de Problemas

### **Página en Blanco**
- ✅ Verifica que el repositorio se llame exactamente `FarmaciaLazarini`
- ✅ Asegúrate de que GitHub Pages esté en la rama `gh-pages`
- ✅ Espera 5-10 minutos después del deploy
- ✅ Recarga la página

### **Errores de Rutas**
- ✅ El archivo `404.html` maneja las rutas de React Router
- ✅ El script en `index.html` restaura las URLs correctas

### **Errores de Build**
- ✅ Ejecuta `npm run build` localmente para ver errores
- ✅ Verifica que TypeScript compile sin errores

## 🎯 Verificación Final

Después del deploy, tu sitio debería:
1. ✅ Cargar correctamente en `https://tu-usuario.github.io/FarmaciaLazarini/`
2. ✅ Mostrar la página principal de la farmacia
3. ✅ Permitir navegación entre sucursales
4. ✅ Mostrar productos correctamente
5. ✅ Funcionar en dispositivos móviles

## 📞 Soporte

Si tienes problemas:
1. Verifica que todos los archivos estén en la rama `gh-pages`
2. Asegúrate de que GitHub Pages esté configurado correctamente
3. Espera al menos 10 minutos después del deploy
4. Recarga la página con Ctrl+F5 (hard refresh)
