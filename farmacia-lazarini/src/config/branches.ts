import { Branch } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'bonifacio',
    name: 'Bonifacio (Laguna Alsina)',
    address: 'Av. San Martín 123, Bonifacio, Buenos Aires',
    phone: '+54 9 2345 123456',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Bonifacio+Laguna+Alsina+Buenos+Aires',
    apiUrl: 'https://api.sheety.co/YOUR_USER_ID/farmacia-lazarini-bonifacio/products'
  },
  {
    id: 'guamini',
    name: 'Guaminí',
    address: 'Av. 25 de Mayo 456, Guaminí, Buenos Aires',
    phone: '+54 9 2345 654321',
    hours: 'Lunes a Sábado: 8:00 - 20:00 | Domingo: 9:00 - 18:00',
    mapUrl: 'https://maps.google.com/?q=Guamini+Buenos+Aires',
    apiUrl: 'https://api.sheety.co/YOUR_USER_ID/farmacia-lazarini-guamini/products'
  }
];

export const DEFAULT_BRANCH = BRANCHES[0]; // Bonifacio por defecto
