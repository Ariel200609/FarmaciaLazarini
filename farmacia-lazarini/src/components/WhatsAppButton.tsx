import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/branches';

interface WhatsAppButtonProps {
  productName: string;
  branchName: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  productName, 
  branchName, 
  className = "" 
}) => {
  const generateWhatsAppMessage = (product: string, branch: string) => {
    const message = `Hola! Me interesa el producto: ${product}

Sucursal: ${branch}

¿Podrían darme más información sobre disponibilidad y precio?

Gracias! 🏥`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage(productName, branchName);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Consultar sobre ${productName} por WhatsApp`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Consultar</span>
    </motion.button>
  );
};
