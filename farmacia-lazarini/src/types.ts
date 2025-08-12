// Tipos para el proyecto Farmacia Lazarini

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image?: string;
  category?: string;
  isPromotional?: boolean;
  discount?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  apiUrl: string;
}

export interface ApiResponse {
  products: Product[];
  branch: Branch;
}
