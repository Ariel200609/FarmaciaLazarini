import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';
import { Branch } from '../types';
import { CONTACT_INFO } from '../config/branches';

interface BranchInfoProps {
  branch: Branch;
}

export const BranchInfo: React.FC<BranchInfoProps> = ({ branch }) => {
  const handleMapClick = () => {
    window.open(branch.mapUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = `Hola! Me gustaría obtener información sobre la sucursal de ${branch.name}

Dirección: ${branch.address}

¿Podrían darme más detalles sobre horarios y servicios?

Gracias! 🏥`;
    
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(CONTACT_INFO.instagramUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Información de la Sucursal <span className="gradient-text">{branch.name}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra nuestra sucursal y contáctanos para cualquier consulta sobre productos, 
            horarios o servicios especiales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Dirección */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lazarini-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-lazarini-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600 leading-relaxed">{branch.address}</p>
                <button
                  onClick={handleMapClick}
                  className="text-lazarini-blue hover:text-lazarini-teal font-medium mt-2 transition-colors"
                >
                  Ver en Google Maps →
                </button>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lazarini-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-lazarini-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-3">{CONTACT_INFO.whatsapp}</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lazarini-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-lazarini-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios de Atención</h3>
                <p className="text-gray-600 leading-relaxed">{branch.hours}</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Síguenos</h3>
                <p className="text-gray-600 mb-3">{CONTACT_INFO.instagram}</p>
                <button
                  onClick={handleInstagramClick}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver Instagram</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe
                src={`https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&hl=es&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${branch.name}`}
              />
            </div>
            
            {/* Overlay con información */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <img 
                    src="/logo.webp" 
                    alt="Farmacia Lazarini Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{branch.name}</h4>
                  <p className="text-sm text-gray-600">{branch.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
