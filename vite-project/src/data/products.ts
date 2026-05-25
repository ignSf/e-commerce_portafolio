import gamingMouse from '../assets/images/gaming_mouse.png';
import gamingKeyboard from '../assets/images/gaming_keyboard.png';
import gamingHeadset from '../assets/images/gaming_headset.png';
import gamingMonitor from '../assets/images/gaming_monitor.png';
import gamingChair from '../assets/images/gaming_chair.png';
import graphicsCard from '../assets/images/graphics_card.png';
import gamingMicrophone from '../assets/images/gaming_microphone.png';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Mouse Inalámbrico Pro X',
    category: 'Periféricos',
    price: 49990,
    originalPrice: 69990,
    image: gamingMouse,
    badge: 'Oferta',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Teclado Mecánico RGB K95',
    category: 'Periféricos',
    price: 89990,
    image: gamingKeyboard,
    badge: 'Nuevo',
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 3,
    name: 'Audífonos 7.1 Surround Pro',
    category: 'Periféricos',
    price: 59990,
    originalPrice: 79990,
    image: gamingHeadset,
    badge: 'Popular',
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 4,
    name: 'Monitor Curvo 27" 165Hz',
    category: 'Monitores',
    price: 249990,
    image: gamingMonitor,
    badge: 'Premium',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    name: 'Silla Ergonómica Titan',
    category: 'Sillas Gamer',
    price: 199990,
    originalPrice: 259990,
    image: gamingChair,
    badge: 'Oferta',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 6,
    name: 'RTX 4070 Super 12GB',
    category: 'Componentes',
    price: 459990,
    image: graphicsCard,
    badge: 'Top Ventas',
    rating: 5.0,
    reviews: 423,
  },
  {
    id: 7,
    name: 'Micrófono Streamer USB-C',
    category: 'Streaming',
    price: 39990,
    image: gamingMicrophone,
    rating: 4.5,
    reviews: 67,
  },
];

export const categories = [
  { name: 'Periféricos', icon: '🖱️', count: 48 },
  { name: 'Componentes', icon: '🔧', count: 35 },
  { name: 'Monitores', icon: '🖥️', count: 22 },
  { name: 'Sillas Gamer', icon: '🪑', count: 15 },
  { name: 'Streaming', icon: '🎙️', count: 28 },
  { name: 'Accesorios', icon: '⌨️', count: 52 },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price);
};
