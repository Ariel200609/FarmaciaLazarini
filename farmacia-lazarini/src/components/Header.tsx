import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Branch } from '../types';

interface HeaderProps {
  currentBranch: Branch;
  onBranchChange: (branch: Branch) => void;
  branches: Branch[];
}

export const Header: React.FC<HeaderProps> = ({ currentBranch, onBranchChange, branches }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo y título principal */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-lazarini-green to-lazarini-teal rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">L</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                FARMACIA LAZARINI
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Cuidando tu salud desde 1990
              </p>
            </div>
          </motion.div>

          {/* Selector de sucursal */}
          <motion.div 
            className="flex space-x-2 mt-4 md:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => onBranchChange(branch)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
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

        {/* Información de la sucursal actual */}
        <motion.div 
          className="border-t border-gray-200 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-5 h-5 text-lazarini-blue" />
              <span className="text-gray-700 text-sm">{currentBranch.address}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-5 h-5 text-lazarini-green" />
              <span className="text-gray-700 text-sm">{currentBranch.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Clock className="w-5 h-5 text-lazarini-teal" />
              <span className="text-gray-700 text-sm">{currentBranch.hours}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
