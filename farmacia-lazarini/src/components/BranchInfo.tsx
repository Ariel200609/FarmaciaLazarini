import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation, Star } from 'lucide-react';
import { Branch } from '../types';

interface BranchInfoProps {
  branch: Branch;
}

export const BranchInfo: React.FC<BranchInfoProps> = ({ branch }) => {
  const features = [
    {
      icon: Star,
      title: 'Atención Personalizada',
      description: 'Farmacéuticos expertos para asesorarte'
    },
    {
      icon: Clock,
      title: 'Horarios Extendidos',
      description: 'Abierto de lunes a domingo'
    },
    {
      icon: Navigation,
      title: 'Ubicación Céntrica',
      description: 'Fácil acceso y estacionamiento'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Sucursal{' '}
            <span className="gradient-text">{branch.name}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visítanos y descubre por qué somos la farmacia de confianza en la zona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lazarini-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-lazarini-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lazarini-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-lazarini-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">{branch.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lazarini-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-lazarini-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">{branch.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </button>
                  <button className="btn-secondary flex-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mapa y características */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mapa */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ubicación
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${branch.name}`}
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lazarini-blue hover:text-lazarini-teal font-medium text-sm"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-lazarini-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-lazarini-green" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
