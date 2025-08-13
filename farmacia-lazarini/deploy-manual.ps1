# Deploy Manual para GitHub Pages
# Script de PowerShell

Write-Host "========================================" -ForegroundColor Green
Write-Host "    DEPLOY MANUAL PARA GITHUB PAGES" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Paso 1: Build del proyecto
Write-Host "1. Construyendo el proyecto..." -ForegroundColor Yellow
try {
    npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "El build falló"
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Read-Host "Presiona Enter para continuar"
    exit 1
}

Write-Host ""
Write-Host "2. Build completado exitosamente!" -ForegroundColor Green
Write-Host ""

# Paso 2: Verificar que la carpeta dist existe
if (-not (Test-Path "dist")) {
    Write-Host "ERROR: La carpeta 'dist' no existe" -ForegroundColor Red
    Read-Host "Presiona Enter para continuar"
    exit 1
}

# Paso 3: Mostrar contenido de dist
Write-Host "3. Contenido de la carpeta 'dist':" -ForegroundColor Yellow
Get-ChildItem -Path "dist" -Recurse | ForEach-Object {
    $relativePath = $_.FullName.Replace((Get-Location).Path + "\dist\", "")
    Write-Host "   $relativePath" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "4. Pasos manuales para completar el deploy:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   a) Ve a tu repositorio en GitHub:" -ForegroundColor White
Write-Host "      https://github.com/tu-usuario/FarmaciaLazarini" -ForegroundColor Blue
Write-Host ""
Write-Host "   b) Crea una nueva rama llamada 'gh-pages' (si no existe):" -ForegroundColor White
Write-Host "      - Click en 'main' (o 'master')" -ForegroundColor Gray
Write-Host "      - Escribe 'gh-pages' y presiona Enter" -ForegroundColor Gray
Write-Host ""
Write-Host "   c) Sube el contenido de la carpeta 'dist' a esa rama:" -ForegroundColor White
Write-Host "      - Arrastra todos los archivos de 'dist' a la rama 'gh-pages'" -ForegroundColor Gray
Write-Host "      - Haz commit con el mensaje 'Deploy to GitHub Pages'" -ForegroundColor Gray
Write-Host ""
Write-Host "   d) Configura GitHub Pages:" -ForegroundColor White
Write-Host "      - Ve a Settings > Pages" -ForegroundColor Gray
Write-Host "      - Source: Deploy from a branch" -ForegroundColor Gray
Write-Host "      - Branch: gh-pages, Folder: / (root)" -ForegroundColor Gray
Write-Host ""
Write-Host "5. URL de tu sitio será:" -ForegroundColor Yellow
Write-Host "   https://tu-usuario.github.io/FarmaciaLazarini/" -ForegroundColor Blue
Write-Host ""
Write-Host "6. Tiempo de espera:" -ForegroundColor Yellow
Write-Host "   - El deploy puede tomar 5-10 minutos" -ForegroundColor Gray
Write-Host "   - Si ves página en blanco, espera y recarga" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Green

Read-Host "Presiona Enter para continuar"
