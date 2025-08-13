import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Loader2, Package, AlertCircle, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  branchName: string;
}

const PRODUCTS_PER_PAGE = 12; // 12 productos por página

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  isLoading, 
  error, 
  branchName 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos por búsqueda
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Calcular productos para la página actual
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Resetear página cuando cambia la búsqueda
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <Loader2 className="w-16 h-16 text-lazarini-green animate-spin mb-4" />
        <p className="text-gray-600 text-lg">Cargando productos de {branchName}...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Error al cargar productos</h3>
        <p className="text-gray-600 text-center max-w-md">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 btn-primary"
        >
          Reintentar
        </button>
      </motion.div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <Package className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {searchTerm ? 'No se encontraron productos' : 'No hay productos disponibles'}
        </h3>
        <p className="text-gray-600 text-center max-w-md">
          {searchTerm 
            ? `No hay productos que coincidan con "${searchTerm}"`
            : `Actualmente no hay productos promocionales en ${branchName}. Vuelve más tarde o contacta directamente con la farmacia.`
          }
        </p>
        {searchTerm && (
          <button 
            onClick={() => handleSearch('')}
            className="mt-4 btn-secondary"
          >
            Limpiar búsqueda
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">
          Productos Promocionales en{' '}
          <span className="gradient-text">{branchName}</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubre nuestras mejores ofertas y productos destacados. 
          Precios especiales por tiempo limitado.
        </p>
      </motion.div>

      {/* Barra de búsqueda */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lazarini-green focus:border-transparent"
          />
        </div>
      </motion.div>

      {/* Información de resultados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6"
      >
        <p className="text-gray-600">
          Mostrando {startIndex + 1}-{Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)} de {filteredProducts.length} productos
        </p>
      </motion.div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={`${product.id}-${branchName}-${currentPage}`}
              product={product}
              index={index}
              branchName={branchName}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center space-x-2 mt-12"
        >
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="px-4 py-2 text-gray-600">
            Página {currentPage} de {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      {/* Información adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-lazarini-green/10 to-lazarini-blue/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro catálogo se actualiza constantemente. Si no ves el producto que necesitas, 
            no dudes en contactarnos directamente. Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contactar por WhatsApp
            </button>
            <button className="btn-secondary">
              Llamar por Teléfono
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
