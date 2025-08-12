import { motion } from 'framer-motion';
import { Pill, Tag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Imagen del producto */}
      <div className="relative h-48 bg-gradient-to-br from-lazarini-green/10 to-lazarini-blue/10 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Pill className="w-16 h-16 text-lazarini-green/40" />
          </div>
        )}
        
        {/* Badge promocional */}
        {product.isPromotional && (
          <motion.div
            className="absolute top-3 right-3 bg-lazarini-green text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Tag className="w-3 h-3" />
            <span>OFERTA</span>
          </motion.div>
        )}
        
        {/* Descuento */}
        {product.discount && (
          <motion.div
            className="absolute top-3 left-3 bg-lazarini-blue text-white px-2 py-1 rounded-full text-xs font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            -{product.discount}
          </motion.div>
        )}
      </div>

      {/* Contenido del producto */}
      <div className="p-6">
        {/* Categoría */}
        {product.category && (
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs text-lazarini-blue font-medium bg-lazarini-blue/10 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        )}

        {/* Nombre del producto */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lazarini-green transition-colors duration-300">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Precio y acción */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.price ? (
              <span className="text-xl font-bold text-lazarini-green">
                {product.price}
              </span>
            ) : (
              <span className="text-sm text-gray-500">Consultar precio</span>
            )}
          </div>
          
          <button className="bg-lazarini-green hover:bg-lazarini-teal text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 transform hover:scale-105">
            Consultar
          </button>
        </div>

        {/* Rating simulado */}
        <div className="flex items-center space-x-1 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">(4.0)</span>
        </div>
      </div>
    </motion.div>
  );
};
