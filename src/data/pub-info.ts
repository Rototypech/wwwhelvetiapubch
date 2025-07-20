import { PubInfo, OpeningHours } from '@/types';

export const pubInfo: PubInfo = {
  name: {
    de: 'Helvetia PUB',
    en: 'Helvetia PUB'
  },
  address: {
    street: 'Hauptgasse 123',
    city: 'Brienz',
    postalCode: '3855',
    country: 'Switzerland'
  },
  phone: '+41 33 951 23 45',
  email: 'info@helvetia-pub.ch',
  website: 'https://helvetia-pub.ch',
  coordinates: {
    lat: 46.7529,
    lng: 8.0384
  }
};

export const openingHours: OpeningHours[] = [
  {
    day: 'monday',
    open: '17:00',
    close: '23:00',
    isOpen: true
  },
  {
    day: 'tuesday',
    open: '17:00',
    close: '23:00',
    isOpen: true
  },
  {
    day: 'wednesday',
    open: '17:00',
    close: '23:00',
    isOpen: true
  },
  {
    day: 'thursday',
    open: '17:00',
    close: '23:00',
    isOpen: true
  },
  {
    day: 'friday',
    open: '17:00',
    close: '01:00',
    isOpen: true
  },
  {
    day: 'saturday',
    open: '17:00',
    close: '01:00',
    isOpen: true
  },
  {
    day: 'sunday',
    open: '17:00',
    close: '22:00',
    isOpen: true
  }
];

export const dayNames = {
  de: {
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag'
  },
  en: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  }
};

export const foodAvailability = {
  de: 'Essen verfügbar: 17:00 - 21:30',
  en: 'Food available: 17:00 - 21:30'
}; 