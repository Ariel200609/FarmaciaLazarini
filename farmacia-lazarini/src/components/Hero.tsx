import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: 'Calidad Garantizada',
      description: 'Productos de primera línea'
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Medicamentos certificados'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'A domicilio en 24h'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-lazarini-green/5 via-lazarini-blue/5 to-lazarini-teal/5 py-20 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo y título */}
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-xl flex items-center justify-center mb-6">
                <img 
                  src="/logo.webp" 
                  alt="Farmacia Lazarini Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Tu Salud es Nuestra{' '}
                <span className="gradient-text">Prioridad</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubre la mejor selección de productos farmacéuticos en Bonifacio y Guaminí. 
              Atención personalizada y precios competitivos para cuidar de tu bienestar.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Ver Productos</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Contactar
              </motion.button>
            </div>
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-lazarini-green/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-lazarini-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
