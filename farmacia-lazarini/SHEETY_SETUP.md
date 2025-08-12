# 🔧 Configuración de Sheety para Farmacia Lazarini

## 📋 Pasos para Configurar Sheety

### 1. Crear Cuenta en Sheety
- Ve a [https://sheety.co](https://sheety.co)
- Crea una cuenta gratuita
- Verifica tu email

### 2. Conectar Google Sheets
- Haz clic en "New Project"
- Selecciona "Google Sheets"
- Autoriza el acceso a tu cuenta de Google
- Selecciona la hoja de cálculo que quieres conectar

### 3. Configurar las Hojas de Cálculo

#### Hoja para Bonifacio
Crea una hoja llamada `farmacia-lazarini-bonifacio` con estas columnas:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| id | name | description | price | image | category | isPromotional | discount |
| prod-001 | Paracetamol 500mg | Analgésico para dolor y fiebre | $2.50 | https://... | Analgésicos | true | 20% |

#### Hoja para Guaminí
Crea una hoja llamada `farmacia-lazarini-guamini` con la misma estructura.

### 4. Obtener las URLs de la API
- En Sheety, ve a tu proyecto
- Haz clic en "API"
- Copia la URL base (ej: `https://api.sheety.co/YOUR_USER_ID/farmacia-lazarini-bonifacio/products`)

### 5. Actualizar el Código
Edita el archivo `src/config/branches.ts`:

```typescript
export const BRANCHES: Branch[] = [
  {
    id: 'bonifacio',
    name: 'Bonifacio (Laguna Alsina)',
    address: 'Av. San Martín 123, Bonifacio, Buenos Aires',
    phone: '+54 9 2345 123456',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Bonifacio+Laguna+Alsina+Buenos+Aires',
    apiUrl: 'https://api.sheety.co/TU_USER_ID_REAL/farmacia-lazarini-bonifacio/products'
  },
  {
    id: 'guamini',
    name: 'Guaminí',
    address: 'Av. 25 de Mayo 456, Guaminí, Buenos Aires',
    phone: '+54 9 2345 654321',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Guamini+Buenos+Aires',
    apiUrl: 'https://api.sheety.co/TU_USER_ID_REAL/farmacia-lazarini-guamini/products'
  }
];
```

## 🚨 Importante

- **Reemplaza `TU_USER_ID_REAL`** con tu ID real de Sheety
- **Las hojas deben ser públicas** para que la API funcione
- **Los nombres de las columnas** deben coincidir exactamente con los ejemplos
- **El ID del producto** debe ser único en cada hoja

## 🔍 Verificar la Configuración

1. **Prueba las URLs de la API** en tu navegador
2. **Verifica que devuelvan JSON** con tus productos
3. **Ejecuta `npm run dev`** para probar localmente
4. **Revisa la consola** del navegador para errores

## 📱 Estructura de Datos Esperada

La API debe devolver un array de objetos como este:

```json
[
  {
    "id": "prod-001",
    "name": "Paracetamol 500mg",
    "description": "Analgésico para dolor y fiebre",
    "price": "$2.50",
    "image": "https://ejemplo.com/imagen.jpg",
    "category": "Analgésicos",
    "isPromotional": true,
    "discount": "20%"
  }
]
```

## 🆘 Solución de Problemas

### Error 404
- Verifica que la URL de la API sea correcta
- Asegúrate de que el proyecto esté publicado en Sheety

### Error de CORS
- Verifica que tu plan de Sheety incluya soporte para CORS
- Considera actualizar a un plan de pago si es necesario

### Datos no se cargan
- Verifica que las hojas de Google Sheets sean públicas
- Revisa que los nombres de las columnas coincidan
- Asegúrate de que haya datos en las hojas
