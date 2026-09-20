import { useState, useEffect } from 'react';

export function useHashRoute(onRouteStart) {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash || '#/';
    return hash.replace('#/', '').split('?')[0] || 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      let newRoute = hash.replace('#/', '').split('?')[0] || 'home';
      const validRoutes = ['home', 'work', 'about', 'services', 'contact'];
      if (!validRoutes.includes(newRoute)) newRoute = 'home';

      if (onRouteStart) onRouteStart();

      setTimeout(() => {
        setRoute(newRoute);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 350);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [onRouteStart]);

  return route;
}
