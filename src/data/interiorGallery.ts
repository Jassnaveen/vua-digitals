export type InteriorCategory =
  | 'Shed Work'
  | 'Railings'
  | 'Wallpaper'
  | 'Flooring'
  | 'Partitions'
  | 'ACP'
  | 'Artificial Grass';

export interface InteriorGalleryItem {
  id: string;
  title: string;
  category: InteriorCategory;
  image: string;
  alt: string;
}

export const interiorGalleryFilters: Array<'All' | InteriorCategory> = [
  'All',
  'Shed Work',
  'Railings',
  'Wallpaper',
  'Flooring',
  'Partitions',
  'ACP',
  'Artificial Grass',
];

export const interiorGalleryItems: InteriorGalleryItem[] = [
  {
    id: 'i1',
    title: 'Industrial Shed Structure',
    category: 'Shed Work',
    image:
      'https://images.pexels.com/photos/37661099/pexels-photo-37661099.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Industrial corrugated metal shed structure against a blue sky',
  },
  {
    id: 'i2',
    title: 'Balcony SS Railing',
    category: 'Railings',
    image:
      'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sleek stainless steel railing against a blue sky',
  },
  {
    id: 'i3',
    title: 'Designer Wallpaper',
    category: 'Wallpaper',
    image:
      'https://images.pexels.com/photos/8134807/pexels-photo-8134807.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern bedroom with elegant designer wallpaper',
  },
  {
    id: 'i4',
    title: 'Wood-look Vinyl Flooring',
    category: 'Flooring',
    image:
      'https://images.pexels.com/photos/368754/pexels-photo-368754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Smooth light brown wooden vinyl flooring with natural texture',
  },
  {
    id: 'i5',
    title: 'Aluminum Partition System',
    category: 'Partitions',
    image:
      'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary office with aluminium and glass partitions',
  },
  {
    id: 'i6',
    title: 'Full Glass Office Partition',
    category: 'Partitions',
    image:
      'https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Spacious office with full glass partition walls and city views',
  },
  {
    id: 'i7',
    title: 'ACP Building Elevation',
    category: 'ACP',
    image:
      'https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern apartment facade with beige cladding panels',
  },
  {
    id: 'i8',
    title: 'Terrace Artificial Grass',
    category: 'Artificial Grass',
    image:
      'https://images.pexels.com/photos/14169364/pexels-photo-14169364.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of lush green artificial grass with a natural look',
  },
  {
    id: 'i9',
    title: 'Textured Feature Wallpaper',
    category: 'Wallpaper',
    image:
      'https://images.pexels.com/photos/12995673/pexels-photo-12995673.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of textured grey wallpaper with subtle horizontal lines',
  },
  {
    id: 'i10',
    title: 'Modern Stair Railing',
    category: 'Railings',
    image:
      'https://images.pexels.com/photos/13272374/pexels-photo-13272374.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern stainless steel railing against a striped wall',
  },
  {
    id: 'i11',
    title: 'Rustic Vinyl Floor',
    category: 'Flooring',
    image:
      'https://images.pexels.com/photos/218535/pexels-photo-218535.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Rustic wooden vinyl flooring with visible wood grain texture',
  },
  {
    id: 'i12',
    title: 'Warehouse Shed Build',
    category: 'Shed Work',
    image:
      'https://images.pexels.com/photos/12026684/pexels-photo-12026684.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Corrugated metal warehouse wall with a round light fixture',
  },
];
