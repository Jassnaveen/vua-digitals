import {
  Megaphone,
  Lightbulb,
  Sticker,
  Brush,
  Sun,
  Building2,
  SquareStack,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Commercial Flex Banners',
    description:
      'High-resolution large-format flex prints built for outdoor visibility, events and shopfronts.',
    icon: Megaphone,
    image:
      'https://images.pexels.com/photos/34659828/pexels-photo-34659828.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Vibrant outdoor advertising billboards on a city street',
  },
  {
    number: '02',
    title: 'LED Lighting Boards',
    description:
      'Illuminated LED signage that keeps your brand visible day and night, indoors and outdoors.',
    icon: Lightbulb,
    image:
      'https://images.pexels.com/photos/5997286/pexels-photo-5997286.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colourful illuminated LED neon signs on a city street at night',
  },
  {
    number: '03',
    title: 'Vinyl Stickering',
    description:
      'Precision-cut vinyl branding for vehicles, glass, walls and surfaces of any shape.',
    icon: Sticker,
    image:
      'https://images.pexels.com/photos/10162528/pexels-photo-10162528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Technician applying a blue vinyl wrap to a vehicle door',
  },
  {
    number: '04',
    title: 'Wall Stickering',
    description:
      'Full-wall vinyl graphics and branding that transform blank walls into visual statements.',
    icon: Brush,
    image:
      'https://images.pexels.com/photos/3697356/pexels-photo-3697356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Bold abstract wall mural with geometric patterns',
  },
  {
    number: '05',
    title: 'UV Lighting Boards',
    description:
      'Ultra-violet printed light boards with vivid, durable colour and a premium glow finish.',
    icon: Sun,
    image:
      'https://images.pexels.com/photos/2763246/pexels-photo-2763246.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Glowing neon open sign in a dimly lit storefront',
  },
  {
    number: '06',
    title: 'ACP Elevation',
    description:
      'Aluminium composite panel cladding and elevations for modern, durable building facades.',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/14207313/pexels-photo-14207313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern building facade with wooden panel cladding',
  },
  {
    number: '07',
    title: 'Acrylic Light Boards',
    description:
      'Custom acrylic illuminated boards with sharp detailing and a clean, premium finish.',
    icon: SquareStack,
    image:
      'https://images.pexels.com/photos/189476/pexels-photo-189476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of an office directory acrylic sign',
  },
  {
    number: '08',
    title: 'All Kind of Advertisements',
    description:
      'End-to-end advertising solutions — from concept and design to production and installation.',
    icon: LayoutGrid,
    image:
      'https://images.pexels.com/photos/30978498/pexels-photo-30978498.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Busy city street filled with bright signage and billboards',
  },
];
