@echo off
echo ========================================
echo    DEPLOY MANUAL PARA GITHUB PAGES
echo ========================================
echo.

echo 1. Construyendo el proyecto...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: El build fallo
    pause
    exit /b 1
)

echo.
echo 2. Build completado exitosamente!
echo.
echo 3. Pasos manuales para completar el deploy:
echo.
echo    a) Ve a tu repositorio en GitHub
echo    b) Crea una nueva rama llamada 'gh-pages' (si no existe)
echo    c) Sube el contenido de la carpeta 'dist' a esa rama
echo    d) Ve a Settings > Pages
echo    e) Configura Source: Deploy from a branch
echo    f) Selecciona la rama 'gh-pages' y folder '/ (root)'
echo.
echo 4. URL de tu sitio sera:
echo    https://tu-usuario.github.io/FarmaciaLazarini/
echo.
echo ========================================
pause
