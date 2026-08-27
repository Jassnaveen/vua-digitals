import { useCallback } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HomePage } from '@/pages/HomePage';
import { InteriorsPage } from '@/pages/InteriorsPage';
import { useRouter } from '@/hooks/useRouter';

export default function App() {
  const { route, navigate } = useRouter();

  const scrollToContact = useCallback(() => {
    if (route !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [route, navigate]);

  return (
    <div className="min-h-screen bg-ink-950">
      <Header route={route} navigate={navigate} onQuote={scrollToContact} />

      {route === '/interiors' ? (
        <InteriorsPage onQuote={scrollToContact} />
      ) : (
        <HomePage onQuote={scrollToContact} navigate={navigate} />
      )}

      <Footer route={route} navigate={navigate} onSection={(id) => {
        if (route !== '/') {
          navigate('/');
          setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      <WhatsAppButton />
    </div>
  );
}
