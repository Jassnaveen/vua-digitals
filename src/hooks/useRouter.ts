import { useEffect, useState, useCallback } from 'react';

export type Route = '/' | '/interiors';

function getCurrentRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === '/interiors') return '/interiors';
  return '/';
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(getCurrentRoute);

  useEffect(() => {
    const onHashChange = () => {
      const next = getCurrentRoute();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'auto' });

      if (next === '/interiors') {
        document.title = 'VUA INTERIOR AND DECORS | Interior & Decor Solutions';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
          meta.setAttribute(
            'content',
            'VUA INTERIOR AND DECORS provides shed work, SS railings, wallpaper, vinyl flooring, aluminum and glass partitions, ACP elevation, artificial grass and complete interior solutions.'
          );
        }
      } else {
        document.title = 'VUA DIGITALS | Digital Printing, Signage & Advertising Solutions';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
          meta.setAttribute(
            'content',
            'VUA DIGITALS provides commercial flex banners, LED lighting boards, vinyl stickering, wall stickering, UV boards, ACP elevation, acrylic light boards and advertising solutions.'
          );
        }
      }
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to: Route) => {
    if (to === '/') {
      window.location.hash = '';
    } else {
      window.location.hash = to;
    }
  }, []);

  return { route, navigate };
}
