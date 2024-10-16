import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Save scroll position before leaving the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      setSavedScrollPosition(window.scrollY); // Save current scroll position
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Restore scroll position on back/forward navigation
  useEffect(() => {
    window.scrollTo(0, savedScrollPosition); // Restore saved scroll position
  }, [location, savedScrollPosition]);

  return null;
};

export default ScrollRestoration;
