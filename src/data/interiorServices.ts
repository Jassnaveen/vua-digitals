import {
  Warehouse,
  Fence,
  Wallpaper,
  Layers,
  Columns3,
  PanelTop,
  Building2,
  Sprout,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

import type { Service } from './services';

export const interiorServices: Service[] = [
  {
    number: '01',
    title: 'Shed Work',
    description:
      'Robust structural shed fabrication for commercial, industrial and residential spaces.',
    icon: Warehouse,
    image:
      'https://images.pexels.com/photos/37661099/pexels-photo-37661099.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Industrial corrugated metal shed structure against a blue sky',
  },
  {
    number: '02',
    title: 'SS Railings',
    description:
      'Premium stainless steel railings for stairs, balconies and walkways — built to last.',
    icon: Fence,
    image:
      'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sleek stainless steel railing against a blue sky',
  },
  {
    number: '03',
    title: 'Wallpaper',
    description:
      'Designer wallpaper solutions that add texture, colour and character to any interior.',
    icon: Wallpaper,
    image:
      'https://images.pexels.com/photos/8134807/pexels-photo-8134807.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern bedroom with elegant designer wallpaper',
  },
  {
    number: '04',
    title: 'Vinyl Flooring',
    description:
      'Durable, stylish vinyl flooring that replicates wood and stone with easy maintenance.',
    icon: Layers,
    image:
      'https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Smooth light brown wooden vinyl flooring with natural texture',
  },
  {
    number: '05',
    title: 'Aluminum Partition',
    description:
      'Sleek aluminium partition systems that define spaces without blocking light.',
    icon: Columns3,
    image:
      'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary office with glass and aluminium partitions',
  },
  {
    number: '06',
    title: 'Full Glass Partition',
    description:
      'Frameless and framed glass partitions for open, light-filled professional interiors.',
    icon: PanelTop,
    image:
      'https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spacious office with full glass partition walls and city views',
  },
  {
    number: '07',
    title: 'ACP Elevation',
    description:
      'Aluminium composite panel elevations for striking, weather-resistant building facades.',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern apartment building facade with beige cladding panels',
  },
  {
    number: '08',
    title: 'Artificial Grass',
    description:
      'Low-maintenance artificial grass for terraces, balconies, landscapes and interiors.',
    icon: Sprout,
    image:
      'https://images.pexels.com/photos/14169364/pexels-photo-14169364.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of lush green artificial grass with a natural look',
  },
  {
    number: '09',
    title: 'All Kind of Interior Works',
    description:
      'Complete interior solutions — from planning and design to fabrication and finishing.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/34823913/pexels-photo-34823913.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary office reception with wood and glass interior design',
  },
];
