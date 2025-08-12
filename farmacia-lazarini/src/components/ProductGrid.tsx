import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Loader2, Package, AlertCircle } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  branchName: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  isLoading, 
  error, 
  branchName 
}) => {
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

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <Package className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No hay productos disponibles</h3>
        <p className="text-gray-600 text-center max-w-md">
          Actualmente no hay productos promocionales en {branchName}. 
          Vuelve más tarde o contacta directamente con la farmacia.
        </p>
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

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${branchName}`}
              product={product}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

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
