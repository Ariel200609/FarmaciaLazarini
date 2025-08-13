import type { Product, Branch } from '../types';
import { getBestImageUrl } from '../utils/imageUtils';

export class ApiService {
  static async fetchProducts(branch: Branch): Promise<Product[]> {
    try {
      const response = await fetch(branch.apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Sheety devuelve un objeto con la clave del nombre de la hoja
      // Extraemos el array de productos de la respuesta
      let productsArray: any[] = [];
      
      if (branch.id === 'bonifacio') {
        productsArray = data.farmaciaLazariniBonifacio || [];
      } else if (branch.id === 'guamini') {
        productsArray = data.farmaciaLazariniGuamini || [];
      }
      
      // Convertimos cada producto al formato correcto
      return productsArray.map((item: any, index: number) => ({
        id: item.id?.toString() || `product-${index}`,
        name: item.name || item.nombre || 'Producto sin nombre',
        description: item.description || item.descripcion || 'Sin descripción',
        price: item.price ? `$${item.price}` : undefined,
        // Usar la mejor URL para evitar problemas de X-Frame-Options
        // Si no hay imagen, usar una de ejemplo que funcione
        image: item.image ? getBestImageUrl(item.image) : 'https://via.placeholder.com/400x300/18DE56/FFFFFF?text=Producto',
        category: item.category || item.categoria,
        isPromotional: item.isPromotional || item.esPromocional || false,
        discount: item.discount ? `${item.discount * 100}%` : undefined
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      // Retornamos productos de ejemplo en caso de error
      return this.getFallbackProducts(branch.name);
    }
  }

  private static getFallbackProducts(branchName: string): Product[] {
    return [
      {
        id: 'fallback-1',
        name: 'Paracetamol 500mg',
        description: 'Analgésico y antipirético para el alivio del dolor y la fiebre',
        price: '$2.50',
        image: 'https://via.placeholder.com/400x300/18DE56/FFFFFF?text=Paracetamol',
        category: 'Analgésicos',
        isPromotional: true,
        discount: '20%'
      },
      {
        id: 'fallback-2',
        name: 'Ibuprofeno 400mg',
        description: 'Antiinflamatorio no esteroideo para el alivio del dolor',
        price: '$3.20',
        image: 'https://via.placeholder.com/400x300/18A1DE/FFFFFF?text=Ibuprofeno',
        category: 'Antiinflamatorios',
        isPromotional: false
      },
      {
        id: 'fallback-3',
        name: 'Vitamina C 1000mg',
        description: 'Suplemento vitamínico para fortalecer el sistema inmune',
        price: '$4.80',
        image: 'https://via.placeholder.com/400x300/19DE99/FFFFFF?text=Vitamina+C',
        category: 'Vitaminas',
        isPromotional: true,
        discount: '15%'
      }
    ];
  }
}
