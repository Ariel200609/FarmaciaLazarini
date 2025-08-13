import { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, currentImage }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      // Convertir imagen a base64 (solución temporal)
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  return (
    <div className="w-full">
      {currentImage ? (
        <div className="relative">
          <img 
            src={currentImage} 
            alt="Producto" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            onClick={() => onImageUpload('')}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive 
              ? 'border-lazarini-green bg-lazarini-green/10' 
              : 'border-gray-300 hover:border-lazarini-blue'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            className="hidden"
            id="image-upload"
          />
          
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              {isUploading ? (
                <div className="w-12 h-12 border-4 border-lazarini-green border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                  <Upload className="w-8 h-8 text-gray-400" />
                </>
              )}
              
              <div className="text-sm text-gray-600">
                {isUploading ? (
                  'Subiendo imagen...'
                ) : (
                  <>
                    <span className="text-lazarini-green font-medium">Haz clic para subir</span> o arrastra y suelta
                    <br />
                    <span className="text-xs text-gray-500">PNG, JPG hasta 5MB</span>
                  </>
                )}
              </div>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};
