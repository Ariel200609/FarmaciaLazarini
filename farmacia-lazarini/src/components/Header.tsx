import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Branch } from '../types';
import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../config/branches';

interface HeaderProps {
  currentBranch: Branch;
  onBranchChange: (branch: Branch) => void;
  branches: Branch[];
}

export const Header: React.FC<HeaderProps> = ({ currentBranch, onBranchChange, branches }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar header si estamos en la parte superior
      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Ocultar header si scrolleamos hacia abajo, mostrar si scrolleamos hacia arriba
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header 
          className="bg-white shadow-lg sticky top-0 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo y título principal */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
              <motion.div 
                className="flex items-center space-x-3 md:space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
                  <img 
                    src="/logo.webp" 
                    alt="Farmacia Lazarini Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
                    FARMACIA LAZARINI
                  </h1>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                    Cuidando tu salud desde 1990
                  </p>
                </div>
                {/* Título compacto para móvil */}
                <div className="sm:hidden">
                  <h1 className="text-lg font-bold gradient-text">
                    FARMACIA LAZARINI
                  </h1>
                </div>
              </motion.div>

              {/* Selector de sucursal */}
              <motion.div 
                className="flex space-x-2 mt-3 md:mt-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => onBranchChange(branch)}
                    className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                      currentBranch.id === branch.id
                        ? 'bg-lazarini-green text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-lazarini-blue hover:text-white'
                    }`}
                  >
                    {branch.name.includes('Bonifacio') ? 'Bonifacio' : 'Guaminí'}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Información de la sucursal actual - Solo en desktop */}
            <motion.div 
              className="hidden md:block border-t border-gray-200 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-lazarini-blue" />
                  <span className="text-gray-700 text-sm">{currentBranch.address}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-lazarini-green" />
                  <span className="text-gray-700 text-sm">{CONTACT_INFO.whatsapp}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-lazarini-teal" />
                  <span className="text-gray-700 text-sm">{currentBranch.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* Información compacta para móvil */}
            <motion.div 
              className="md:hidden border-t border-gray-200 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center space-x-4 text-center">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-lazarini-blue" />
                  <span className="text-gray-700 text-xs">Bonifacio / Guaminí</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4 text-lazarini-green" />
                  <span className="text-gray-700 text-xs">{CONTACT_INFO.whatsapp}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
