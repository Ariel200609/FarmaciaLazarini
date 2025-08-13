import { motion } from 'framer-motion';
import { Pill, Tag, Star } from 'lucide-react';
import { Product } from '../types';
import { SafeImage } from './SafeImage';
import { WhatsAppButton } from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  index: number;
  branchName: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index, branchName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Imagen del producto */}
      <div className="relative h-48 bg-gradient-to-br from-lazarini-green/10 to-lazarini-blue/10 overflow-hidden">
        <SafeImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isPromotional && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
            >
              <Tag className="w-3 h-3" />
              <span>OFERTA</span>
            </motion.div>
          )}
          
          {product.discount && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-lazarini-green text-white px-2 py-1 rounded-full text-xs font-bold"
            >
              -{product.discount}
            </motion.div>
          )}
        </div>

        {/* Categoría */}
        {product.category && (
          <div className="absolute top-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {product.category}
            </div>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lazarini-green transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Precio */}
        {product.price && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-lazarini-green">
                {product.price}
              </span>
              {product.isPromotional && (
                <span className="text-sm text-gray-500 line-through">
                  ${parseFloat(product.price.replace('$', '')) * 1.2}
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          </div>
        )}

        {/* Botón de WhatsApp */}
        <WhatsAppButton 
          productName={product.name}
          branchName={branchName}
          className="w-full justify-center"
        />
      </div>
    </motion.div>
  );
};
