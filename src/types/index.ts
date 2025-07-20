export interface MenuItem {
  id: string;
  name: {
    de: string;
    en: string;
  };
  description?: {
    de: string;
    en: string;
  };
  price: number;
  category: string;
  available: boolean;
  image?: string;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: {
    de: string;
    en: string;
  };
  icon: string;
  items: MenuItem[];
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
}

export interface PubInfo {
  name: {
    de: string;
    en: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  tableNumber?: string;
  isTakeaway: boolean;
  notes?: string;
  status: 'pending' | 'confirmed' | 'ready' | 'completed';
  createdAt: Date;
  paymentMethod: 'cash' | 'sumup';
}

export interface Language {
  code: 'de' | 'en';
  name: string;
  flag: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'staff';
  createdAt: Date;
}

export interface LegalContent {
  impressum: {
    de: string;
    en: string;
  };
  privacyPolicy: {
    de: string;
    en: string;
  };
  termsConditions: {
    de: string;
    en: string;
  };
  cookieNotice: {
    de: string;
    en: string;
  };
} 