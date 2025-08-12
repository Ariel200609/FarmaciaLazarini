# 🏥 Farmacia Lazarini - Landing Page

Una landing page profesional y moderna para Farmacia Lazarini, con soporte para dos sucursales (Bonifacio y Guaminí) y integración con Google Sheets a través de Sheety API.

## ✨ Características

- **Diseño Responsive**: Optimizado para escritorio y dispositivos móviles
- **Dos Sucursales**: Bonifacio (Laguna Alsina) y Guaminí
- **Integración con Google Sheets**: Los productos se actualizan automáticamente desde hojas de cálculo
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Paleta de Colores Corporativa**: Colores personalizados de la marca
- **Componentes Reutilizables**: Arquitectura limpia y mantenible
- **Despliegue Automático**: Configurado para GitHub Pages

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Enrutamiento**: React Router DOM
- **Despliegue**: GitHub Pages

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta de GitHub
- Cuenta de Sheety (para conectar Google Sheets)

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/FarmaciaLazarini.git
   cd FarmaciaLazarini
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar las APIs de Sheety**
   
   Edita el archivo `src/config/branches.ts` y reemplaza las URLs de ejemplo con tus URLs reales de Sheety:
   
   ```typescript
   export const BRANCHES: Branch[] = [
     {
       id: 'bonifacio',
       name: 'Bonifacio (Laguna Alsina)',
       // ... otros campos
       apiUrl: 'https://api.sheety.co/TU_USER_ID/farmacia-lazarini-bonifacio/products'
     },
     {
       id: 'guamini',
       name: 'Guaminí',
       // ... otros campos
       apiUrl: 'https://api.sheety.co/TU_USER_ID/farmacia-lazarini-guamini/products'
     }
   ];
   ```

## 🔧 Configuración de Google Sheets

### Estructura de la Hoja de Cálculo

Crea dos hojas de Google Sheets (una para cada sucursal) con las siguientes columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| `id` | ID único del producto | `prod-001` |
| `name` o `nombre` | Nombre del producto | `Paracetamol 500mg` |
| `description` o `descripcion` | Descripción del producto | `Analgésico para dolor y fiebre` |
| `price` o `precio` | Precio del producto | `$2.50` |
| `image` o `imagen` | URL de la imagen | `https://ejemplo.com/imagen.jpg` |
| `category` o `categoria` | Categoría del producto | `Analgésicos` |
| `isPromotional` o `esPromocional` | Si es promocional | `true` o `false` |
| `discount` o `descuento` | Porcentaje de descuento | `20%` |

### Configuración de Sheety

1. Ve a [Sheety.co](https://sheety.co) y crea una cuenta
2. Conecta tu Google Sheets
3. Crea dos proyectos: uno para cada sucursal
4. Copia las URLs de la API que te proporciona Sheety
5. Actualiza el archivo `src/config/branches.ts` con esas URLs

## 🎨 Personalización

### Colores Corporativos

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'lazarini': {
    green: '#18DE56',    // Verde principal
    cyan: '#18DEDC',     // Cian
    teal: '#19DE99',     // Verde azulado
    blue: '#18A1DE',     // Azul
    mint: '#62DEB3',     // Verde menta
  }
}
```

### Tipografía

La fuente principal es Inter, importada desde Google Fonts. Puedes cambiarla editando `src/index.css`.

## 🚀 Desarrollo

### Ejecutar en modo desarrollo
```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

### Construir para producción
```bash
npm run build
```

### Vista previa de la build
```bash
npm run preview
```

## 📱 Despliegue en GitHub Pages

### Configuración Automática

1. **Configurar el repositorio**
   - Asegúrate de que tu repositorio se llame exactamente `FarmaciaLazarini`
   - Ve a Settings > Pages
   - En Source, selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`

2. **Desplegar**
   ```bash
   npm run deploy
   ```

   Este comando:
   - Construye el proyecto
   - Crea la rama `gh-pages`
   - Sube la carpeta `dist` a esa rama
   - Configura automáticamente GitHub Pages

### Configuración Manual

Si prefieres configurar manualmente:

1. Ejecuta `npm run build`
2. Crea una rama `gh-pages`
3. Sube la carpeta `dist` a esa rama
4. Configura GitHub Pages para usar la rama `gh-pages`

## 🔄 Actualización de Productos

Los productos se actualizan automáticamente desde Google Sheets:

1. **Edita tu hoja de Google Sheets**
2. **Los cambios se reflejan automáticamente** en la web (puede tomar unos minutos)
3. **No es necesario redeployar** la aplicación

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Encabezado con navegación
│   ├── Hero.tsx        # Sección principal
│   ├── ProductGrid.tsx # Grid de productos
│   ├── ProductCard.tsx # Tarjeta individual de producto
│   ├── BranchInfo.tsx  # Información de sucursal
│   ├── Footer.tsx      # Pie de página
│   └── HomePage.tsx    # Página principal
├── config/
│   └── branches.ts     # Configuración de sucursales
├── hooks/
│   └── useProducts.ts  # Hook para manejar productos
├── services/
│   └── api.ts          # Servicio de API
├── types/
│   └── index.ts        # Tipos TypeScript
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🐛 Solución de Problemas

### Error de CORS
Si tienes problemas de CORS con Sheety, asegúrate de que tu plan incluya soporte para CORS.

### Productos no se cargan
1. Verifica que las URLs de Sheety sean correctas
2. Asegúrate de que las hojas de Google Sheets sean públicas
3. Revisa la consola del navegador para errores

### Problemas de build
```bash
# Limpiar cache
npm run build --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación, contacta al desarrollador.

## 📄 Licencia

Este proyecto es privado y está destinado exclusivamente para Farmacia Lazarini.

---

**Desarrollado con ❤️ para Farmacia Lazarini**
