import { motion } from 'framer-motion';
import { Pill, Heart, Shield, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  const features = [
    {
      icon: Pill,
      title: 'Medicamentos Genéricos',
      description: 'Calidad garantizada a precios accesibles'
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Asesoramiento profesional para tu salud'
    },
    {
      icon: Shield,
      title: 'Productos Originales',
      description: 'Trabajamos con las mejores marcas'
    },
    {
      icon: Truck,
      title: 'Entrega a Domicilio',
      description: 'Servicio disponible en toda la zona'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-lazarini-green via-lazarini-teal to-lazarini-blue text-white overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tu Salud es Nuestra
              <span className="block text-lazarini-mint">Prioridad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-lazarini-mint leading-relaxed">
              En Farmacia Lazarini, nos dedicamos a brindarte la mejor atención farmacéutica 
              con productos de calidad y asesoramiento profesional personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary bg-white text-lazarini-green hover:bg-lazarini-mint">
                Ver Productos
              </button>
              <button className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-lazarini-green">
                Contactar
              </button>
            </div>
          </motion.div>

          {/* Imagen destacada */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Pill className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-lazarini-mint text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
