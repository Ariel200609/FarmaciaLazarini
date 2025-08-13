import { Branch } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'bonifacio',
    name: 'Bonifacio (Laguna Alsina)',
    address: 'Gral. Roca 48, B6439 Laguna Alsina, Provincia de Buenos Aires',
    phone: '+54 9 2923 436229',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=-36.809260,-62.248893',
    coordinates: { lat: -36.809260, lng: -62.248893 },
    apiUrl: 'https://api.sheety.co/4f6515d03090e6f70f26069992ef1f35/farmaciaLazarini/farmaciaLazariniBonifacio'
  },
  {
    id: 'guamini',
    name: 'Guaminí',
    address: 'Cnel. Marcelino E. Freyre 199, B6435 Guaminí, Provincia de Buenos Aires',
    phone: '+54 9 2923 436229',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Guamini+Buenos+Aires',
    coordinates: { lat: -37.0333, lng: -62.4167 },
    apiUrl: 'https://api.sheety.co/4f6515d03090e6f70f26069992ef1f35/farmaciaLazarini/farmaciaLazariniGuamini'
  }
];

export const DEFAULT_BRANCH = BRANCHES[0]; // Bonifacio por defecto

// Información de contacto general
export const CONTACT_INFO = {
  whatsapp: '+5492923436229',
  instagram: '@farmacia.lazarini',
  instagramUrl: 'https://instagram.com/farmacia.lazarini'
};
