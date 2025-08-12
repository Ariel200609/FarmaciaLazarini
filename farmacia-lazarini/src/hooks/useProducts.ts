import { useState, useEffect } from 'react';
import type { Product, Branch } from '../types';
import { ApiService } from '../services/api';

export const useProducts = (branch: Branch) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await ApiService.fetchProducts(branch);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar productos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [branch]);

  return { products, isLoading, error };
};
