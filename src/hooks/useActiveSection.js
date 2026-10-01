import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SECTION_IDS = ['about', 'services', 'process', 'projects', 'why-amra', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const rafRef = useRef(null);
  const prevSectionRef = useRef(null);

  useEffect(() => {
    // Only run on home page
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const getSections = () => SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);

    const updateActive = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
      const scrollY = window.scrollY;
      // Activation point: just below the fixed navbar
      const activationY = scrollY + navbarHeight + 10; // 10px offset for safety

      let found = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = rect.bottom + scrollY;
        if (activationY >= top && activationY < bottom) {
          found = section.id;
          break;
        }
      }

      // If we are at the very top (hero area), set to null
      if (!found) {
        if (scrollY < navbarHeight + 20) {
          found = null;
        } else {
          // between sections – keep previous to avoid flickering
          found = prevSectionRef.current;
        }
      }

      if (found !== prevSectionRef.current) {
        prevSectionRef.current = found;
        setActiveSection(found);
      }
    };

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial update
    updateActive();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [location.pathname]);

  // Hash change override (e.g., /#process)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && SECTION_IDS.includes(hash)) {
      setActiveSection(hash);
      prevSectionRef.current = hash;
    }
  }, [location.hash]);

  return activeSection;
}