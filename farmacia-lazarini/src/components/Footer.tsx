import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/branches';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
                <img 
                  src="/logo.webp" 
                  alt="Farmacia Lazarini Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">
                  FARMACIA LAZARINI
                </h3>
                <p className="text-gray-400 text-sm">
                  Cuidando tu salud desde 1990
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Somos tu farmacia de confianza, comprometidos con tu bienestar y salud. 
              Ofrecemos productos de calidad y atención personalizada en Bonifacio y Guaminí.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                title="Síguenos en Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                title="Contáctanos por WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-gray-400 hover:text-lazarini-green transition-colors">Productos</a></li>
              <li><a href="#sucursales" className="text-gray-400 hover:text-lazarini-green transition-colors">Sucursales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Venta de medicamentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Asesoramiento farmacéutico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Productos de cuidado personal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lazarini-green transition-colors">Entrega a domicilio</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-lazarini-green" />
              <span className="text-gray-400">Bonifacio y Guaminí, Buenos Aires</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-lazarini-green" />
              <span className="text-gray-400">{CONTACT_INFO.whatsapp}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-lazarini-green" />
              <span className="text-gray-400">info@farmacialazarini.com</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Farmacia Lazarini. Todos los derechos reservados. | 
            <a href="#" className="text-lazarini-green hover:text-lazarini-teal ml-2">Política de Privacidad</a> | 
            <a href="#" className="text-lazarini-green hover:text-lazarini-teal ml-2">Términos de Servicio</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
