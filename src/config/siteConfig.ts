/**
 * ============================================================
 *  VUA DIGITALS — SITE CONFIGURATION
 * ============================================================
 */

export const siteConfig = {
  companyName: 'VUA DIGITALS',

  phone: '+91 9245492377',
  whatsapp: '919245492377',
  email: 'vuadigitalsmdu@gmail.com',

  address: 'SPE COMPLEX, Rajampadi, Theni Main Road, Madurai',

  website: 'https://vua-digitals.vercel.app/',

  instagram: 'https://www.instagram.com/vua_digitals/',

  // Facebook page not provided yet.
  facebook: '#',

  googleMaps: 'https://share.google/VOd5exomqQfBZX3ML',

  whatsappMessage:
    'Hi VUA DIGITALS, I would like to enquire about your services.',

  interiorDivision: {
    name: 'VUA INTERIOR AND DECORS',
    tagline: 'Explore Interior & Decoration Services',
    route: '/interiors',
  },
} as const;

/** Creates a WhatsApp link with a prefilled message. */
export function whatsappLink(
  message: string = siteConfig.whatsappMessage
): string {
  const num = siteConfig.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Creates a tel: link. */
export function phoneLink(): string {
  return `tel:${siteConfig.phone.replace(/\s+/g, '')}`;
}

/** Creates a mailto: link. */
export function emailLink(): string {
  return `mailto:${siteConfig.email}`;
}
