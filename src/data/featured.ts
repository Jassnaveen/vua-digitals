export interface FeaturedService {
  id: string;
  label: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  alt: string;
}

export const featuredServices: FeaturedService[] = [
  {
    id: 'flex-banners',
    label: 'Featured / 01',
    title: 'Commercial Flex Banners',
    description:
      'Large-format flex printing for promotions, events, shopfronts and outdoor campaigns. Vivid colours, weather-resistant finishes, fast turnaround.',
    tagline: 'Built for visibility. Designed for impact.',
    image:
      'https://images.pexels.com/photos/34659828/pexels-photo-34659828.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Vibrant outdoor advertising billboards on a city street',
  },
  {
    id: 'led-boards',
    label: 'Featured / 02',
    title: 'LED Lighting Boards',
    description:
      'Illuminated LED signage engineered for round-the-clock visibility. Custom shapes, energy-efficient modules and premium build quality.',
    tagline: 'Your brand, visible day and night.',
    image:
      'https://images.pexels.com/photos/5997286/pexels-photo-5997286.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Colourful illuminated LED neon signs on a city street at night',
  },
  {
    id: 'vinyl-wall',
    label: 'Featured / 03',
    title: 'Vinyl & Wall Stickering',
    description:
      'Precision-cut vinyl branding for vehicles, glass, walls and retail spaces. From single panels to full-wall graphics.',
    tagline: 'Every surface, fully branded.',
    image:
      'https://images.pexels.com/photos/10162528/pexels-photo-10162528.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Technician applying a blue vinyl wrap to a vehicle door',
  },
  {
    id: 'acp-acrylic',
    label: 'Featured / 04',
    title: 'ACP & Acrylic Signage',
    description:
      'Aluminium composite panel elevations and acrylic light boards for a clean, architectural, premium finish — inside and out.',
    tagline: 'Architectural signage, built to last.',
    image:
      'https://images.pexels.com/photos/14207313/pexels-photo-14207313.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Modern building facade with wooden panel cladding',
  },
];

export interface InteriorFeature {
  id: string;
  label: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  alt: string;
}

export const interiorFeatures: InteriorFeature[] = [
  {
    id: 'shed-work',
    label: 'Feature / 01',
    title: 'Shed Work',
    description:
      'Structural shed fabrication for commercial, industrial and residential use — robust, weather-proof and built to specification.',
    tagline: 'Structure engineered to endure.',
    image:
      'https://images.pexels.com/photos/37661099/pexels-photo-37661099.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Industrial corrugated metal shed structure against a blue sky',
  },
  {
    id: 'ss-railings',
    label: 'Feature / 02',
    title: 'SS Railings',
    description:
      'Premium stainless steel railings for stairs, balconies and walkways. Clean lines, precision welds and a lasting finish.',
    tagline: 'Strength with a refined edge.',
    image:
      'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Sleek stainless steel railing against a blue sky',
  },
  {
    id: 'wallpaper-flooring',
    label: 'Feature / 03',
    title: 'Wallpaper & Vinyl Flooring',
    description:
      'Designer wallpaper and durable vinyl flooring that bring texture, warmth and personality to any interior.',
    tagline: 'Surfaces with character.',
    image:
      'https://images.pexels.com/photos/8134807/pexels-photo-8134807.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Modern bedroom with elegant designer wallpaper and lighting',
  },
  {
    id: 'partitions',
    label: 'Feature / 04',
    title: 'Aluminum & Full Glass Partitions',
    description:
      'Sleek partition systems that define space without sacrificing light — ideal for offices, clinics and commercial interiors.',
    tagline: 'Open space, clearly defined.',
    image:
      'https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Spacious office with full glass partition walls and city views',
  },
  {
    id: 'acp-elevation',
    label: 'Feature / 05',
    title: 'ACP Elevation',
    description:
      'Aluminium composite panel elevations for striking, weather-resistant facades that elevate any building.',
    tagline: 'Facades that make a statement.',
    image:
      'https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Modern apartment facade with beige cladding panels',
  },
  {
    id: 'artificial-grass',
    label: 'Feature / 06',
    title: 'Artificial Grass',
    description:
      'Low-maintenance artificial grass for terraces, balconies, landscapes and interiors — green all year round.',
    tagline: 'Green spaces, effortless.',
    image:
      'https://images.pexels.com/photos/14169364/pexels-photo-14169364.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Close-up of lush green artificial grass with a natural look',
  },
];
