export type GalleryCategory =
  | 'Flex'
  | 'LED Boards'
  | 'Vinyl'
  | 'Wall Branding'
  | 'ACP'
  | 'Acrylic'
  | 'Advertising';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
}

export const galleryFilters: Array<'All' | GalleryCategory> = [
  'All',
  'Flex',
  'LED Boards',
  'Vinyl',
  'Wall Branding',
  'ACP',
  'Acrylic',
  'Advertising',
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Streetfront Flex Campaign',
    category: 'Flex',
    image:
      'https://images.pexels.com/photos/34659828/pexels-photo-34659828.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Vibrant billboards on an urban street',
  },
  {
    id: 'g2',
    title: 'Night LED Storefront',
    category: 'LED Boards',
    image:
      'https://images.pexels.com/photos/5997286/pexels-photo-5997286.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colourful illuminated LED neon signs at night',
  },
  {
    id: 'g3',
    title: 'Vehicle Vinyl Branding',
    category: 'Vinyl',
    image:
      'https://images.pexels.com/photos/36045954/pexels-photo-36045954.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sports car with a colourful custom vinyl wrap in a shop',
  },
  {
    id: 'g4',
    title: 'Geometric Wall Mural',
    category: 'Wall Branding',
    image:
      'https://images.pexels.com/photos/3697356/pexels-photo-3697356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Abstract blue and green geometric wall mural',
  },
  {
    id: 'g5',
    title: 'ACP Facade Cladding',
    category: 'ACP',
    image:
      'https://images.pexels.com/photos/14207313/pexels-photo-14207313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern building facade with wooden panel cladding',
  },
  {
    id: 'g6',
    title: 'Office Directory Acrylic',
    category: 'Acrylic',
    image:
      'https://images.pexels.com/photos/189476/pexels-photo-189476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of an office directory acrylic sign',
  },
  {
    id: 'g7',
    title: 'Citywide Advertising',
    category: 'Advertising',
    image:
      'https://images.pexels.com/photos/30978498/pexels-photo-30978498.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Busy city street filled with bright signage and billboards',
  },
  {
    id: 'g8',
    title: 'Glowing Open Sign',
    category: 'LED Boards',
    image:
      'https://images.pexels.com/photos/2763246/pexels-photo-2763246.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Glowing neon open sign in a dimly lit storefront',
  },
  {
    id: 'g9',
    title: 'Vinyl Wrap Detail',
    category: 'Vinyl',
    image:
      'https://images.pexels.com/photos/10162528/pexels-photo-10162528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Technician applying a blue vinyl wrap to a vehicle door',
  },
  {
    id: 'g10',
    title: 'Festival Flex Hoarding',
    category: 'Flex',
    image:
      'https://images.pexels.com/photos/38755330/pexels-photo-38755330.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colourful festival posters displayed on building columns',
  },
  {
    id: 'g11',
    title: 'Storefront Signage Suite',
    category: 'Advertising',
    image:
      'https://images.pexels.com/photos/37126968/pexels-photo-37126968.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Busy storefront with illuminated signage at night',
  },
  {
    id: 'g12',
    title: 'ACP Elevation Detail',
    category: 'ACP',
    image:
      'https://images.pexels.com/photos/30020797/pexels-photo-30020797.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern apartment facade with beige cladding panels',
  },
];
