/**
 * ============================================================
 *  VUA DIGITALS — SITE CONFIGURATION
 * ============================================================
 *  All business contact details live here.
 *  Replace the placeholder values with the real business info.
 * ============================================================
 */

export const siteConfig = {
  companyName: 'VUA DIGITALS',

  // IMPORTANT: Replace these placeholders with the real business details.
  phone: 'YOUR_PHONE_NUMBER',
  whatsapp: 'YOUR_WHATSAPP_NUMBER', // international format, digits only, e.g. 919999999999
  email: 'YOUR_EMAIL',
  address: 'YOUR_ADDRESS',
  website: 'https://vuadigitals.example',

  // Social links — leave as '#' until real URLs are provided.
  instagram: 'YOUR_INSTAGRAM_URL',
  facebook: 'YOUR_FACEBOOK_URL',
  googleMaps: 'YOUR_GOOGLE_MAPS_URL',

  // Default WhatsApp prefill message.
  whatsappMessage: 'Hi VUA DIGITALS, I would like to enquire about your services.',

  // Interior division
  interiorDivision: {
    name: 'VUA INTERIOR AND DECORS',
    tagline: 'Explore Interior & Decoration Services',
    route: '/interiors',
  },
} as const;

/** Formats the raw whatsapp number into a wa.me link with a prefilled message. */
export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  const num = siteConfig.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** tel: link for the phone number. */
export function phoneLink(): string {
  return `tel:${siteConfig.phone.replace(/\s+/g, '')}`;
}

/** mailto: link for email. */
export function emailLink(): string {
  return `mailto:${siteConfig.email}`;
}
