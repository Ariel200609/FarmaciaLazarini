import type { Product, Branch } from '../types';

export class ApiService {
  static async fetchProducts(branch: Branch): Promise<Product[]> {
    try {
      const response = await fetch(branch.apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Sheety devuelve un array de objetos, cada uno con propiedades del producto
      // Convertimos esto a nuestro formato Product
      return data.map((item: any, index: number) => ({
        id: item.id || `product-${index}`,
        name: item.name || item.nombre || 'Producto sin nombre',
        description: item.description || item.descripcion || 'Sin descripción',
        price: item.price || item.precio,
        image: item.image || item.imagen,
        category: item.category || item.categoria,
        isPromotional: item.isPromotional || item.esPromocional || false,
        discount: item.discount || item.descuento
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
        category: 'Analgésicos',
        isPromotional: true,
        discount: '20%'
      },
      {
        id: 'fallback-2',
        name: 'Ibuprofeno 400mg',
        description: 'Antiinflamatorio no esteroideo para el alivio del dolor',
        price: '$3.20',
        category: 'Antiinflamatorios',
        isPromotional: false
      },
      {
        id: 'fallback-3',
        name: 'Vitamina C 1000mg',
        description: 'Suplemento vitamínico para fortalecer el sistema inmune',
        price: '$4.80',
        category: 'Vitaminas',
        isPromotional: true,
        discount: '15%'
      }
    ];
  }
}
