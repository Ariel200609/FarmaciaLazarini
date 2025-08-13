// Utilidades para manejo de imágenes

/**
 * Convierte cualquier enlace de Google Drive al formato correcto para mostrar imágenes
 */
export const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return '';
  
  // Si ya es un enlace convertido, lo devolvemos tal como está
  if (url.includes('drive.google.com/uc?export=view')) {
    return url;
  }
  
  // Extraer el ID del archivo de Google Drive
  const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (driveIdMatch) {
    const fileId = driveIdMatch[1];
    // Usar múltiples formatos para evitar problemas de X-Frame-Options
    return `https://drive.google.com/uc?id=${fileId}&export=download`;
  }
  
  // Si no es un enlace de Google Drive, devolver la URL original
  return url;
};

/**
 * Verifica si una URL es de Google Drive
 */
export const isGoogleDriveUrl = (url: string): boolean => {
  return url.includes('drive.google.com');
};

/**
 * Obtiene el ID del archivo de Google Drive desde una URL
 */
export const getGoogleDriveFileId = (url: string): string | null => {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
};

/**
 * Genera múltiples formatos de URL para Google Drive
 */
export const generateGoogleDriveUrls = (url: string): {
  view: string;
  download: string;
  preview: string;
} => {
  const fileId = getGoogleDriveFileId(url);
  
  if (!fileId) {
    return {
      view: url,
      download: url,
      preview: url
    };
  }
  
  return {
    view: `https://drive.google.com/uc?export=view&id=${fileId}`,
    download: `https://drive.google.com/uc?id=${fileId}&export=download`,
    preview: `https://drive.google.com/file/d/${fileId}/preview`
  };
};

/**
 * Obtiene la mejor URL para mostrar una imagen, con fallbacks
 */
export const getBestImageUrl = (url: string): string => {
  if (!url) return '';
  
  // Si no es Google Drive, devolver la URL original
  if (!isGoogleDriveUrl(url)) {
    return url;
  }
  
  const fileId = getGoogleDriveFileId(url);
  if (!fileId) return url;
  
  // Usar el formato de descarga que suele funcionar mejor
  return `https://drive.google.com/uc?id=${fileId}&export=download`;
};
