import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Services } from '@/components/Services';
import { FeaturedServices } from '@/components/FeaturedServices';
import { Gallery } from '@/components/Gallery';
import { WhyChoose } from '@/components/WhyChoose';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { InteriorPromo } from '@/components/InteriorPromo';
import { Contact } from '@/components/Contact';
import { featuredServices } from '@/data/featured';
import { galleryItems, galleryFilters } from '@/data/gallery';
import type { Route } from '@/hooks/useRouter';

interface HomePageProps {
  onQuote: () => void;
  navigate: (to: Route) => void;
}

export function HomePage({ onQuote, navigate }: HomePageProps) {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>
      <Hero onExploreWork={() => scrollTo('work')} onQuote={onQuote} />
      <TrustStrip />
      <Services onEnquire={onQuote} />
      <FeaturedServices items={featuredServices} onEnquire={onQuote} />
      <Gallery
        id="work"
        heading="Our Work"
        subheading="Real-world branding, signage and advertising solutions."
        filters={galleryFilters}
        items={galleryItems}
      />
      <WhyChoose />
      <Process />
      <About onTalk={() => scrollTo('contact')} />
      <InteriorPromo onExplore={() => navigate('/interiors')} />
      <Contact />
    </main>
  );
}
