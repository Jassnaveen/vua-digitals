import { InteriorHero } from '@/components/InteriorHero';
import { Services } from '@/components/Services';
import { FeaturedServices } from '@/components/FeaturedServices';
import { Gallery } from '@/components/Gallery';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { interiorServices } from '@/data/interiorServices';
import { interiorFeatures } from '@/data/featured';
import { interiorGalleryItems, interiorGalleryFilters } from '@/data/interiorGallery';

interface InteriorsPageProps {
  onQuote: () => void;
}

export function InteriorsPage({ onQuote }: InteriorsPageProps) {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const interiorServiceNames = interiorServices.map((s) => s.title);

  return (
    <main>
      <InteriorHero onQuote={onQuote} onExplore={() => scrollTo('work')} />

      <div id="services">
        <Services
          onEnquire={onQuote}
          items={interiorServices}
          eyebrow="What we do"
          heading="Interior & decor services"
          subheading="Complete interior solutions for commercial, residential and professional spaces."
        />
      </div>

      <FeaturedServices items={interiorFeatures} onEnquire={onQuote} />

      <Gallery
        id="work"
        heading="Interior Projects"
        subheading="Real interior, partition and decor solutions delivered by our team."
        filters={interiorGalleryFilters}
        items={interiorGalleryItems}
      />

      <Process />

      <Contact serviceOptions={interiorServiceNames} />
    </main>
  );
}
