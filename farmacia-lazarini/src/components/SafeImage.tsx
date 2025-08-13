import { useState } from 'react';
import { Pill } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  fallbackIcon = <Pill className="w-16 h-16 text-lazarini-green/40" />
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-lazarini-green/10 to-lazarini-blue/10 ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-lazarini-green/10 to-lazarini-blue/10 ${className}`}>
          <div className="w-8 h-8 border-4 border-lazarini-green border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
};
