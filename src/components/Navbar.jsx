import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, MessageCircle } from 'lucide-react';
import { company } from '../data/company';
import MobileMenu from './MobileMenu';
import amraWordmark from '../assets/images/amra-wordmark.png';
import amraLogo from '../assets/images/amra-logo.webp';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', to: '/about', section: 'about' },
  { label: 'Services', to: '/services', section: 'services' },
  { label: 'Process', to: '/#process', section: 'process' },
  { label: 'Projects', to: '/projects', section: 'projects' },
  { label: 'Why AMRA', to: '/#why-amra', section: 'why-amra' },
  { label: 'Contact', to: '/contact', section: 'contact' },
];

const HOME_SECTIONS = ['about', 'services', 'process', 'projects', 'why-amra', 'contact'];
const DEDICATED_ROUTES = new Set(['about', 'services', 'projects', 'contact']);

function navbarHeight() {
  return document.querySelector('.navbar')?.getBoundingClientRect().height || 80;
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [menuOpen]);

  /* Home-page scroll spy: exactly one navigation item is active. */
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    let raf = 0;

    const update = () => {
      const line = navbarHeight() + Math.min(150, Math.max(90, window.innerHeight * 0.22));
      let current = null;
      let closestTop = -Infinity;

      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= line && rect.bottom > line) {
          current = id;
          break;
        }

        if (rect.top <= line && rect.top > closestTop) {
          closestTop = rect.top;
          current = id;
        }
      }

      setActiveSection(current);
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const hash = window.location.hash.replace(/^#/, '');
    if (!HOME_SECTIONS.includes(hash)) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;

      setActiveSection(hash);

      window.scrollTo({
        top: Math.max(
          0,
          el.getBoundingClientRect().top + window.scrollY - navbarHeight() - 16
        ),
        behavior: 'smooth',
      });
    }, 80);

    return () => clearTimeout(timer);
  }, [isHome, location.key]);

  const goToHomeSection = (section) => {
    const el = document.getElementById(section);
    if (!el) return;

    setActiveSection(section);
    window.history.replaceState(null, '', `/#${section}`);

    window.scrollTo({
      top: Math.max(
        0,
        el.getBoundingClientRect().top + window.scrollY - navbarHeight() - 16
      ),
      behavior: 'smooth',
    });
  };

  const handleNavigation = (event, link) => {
    setMenuOpen(false);

    if (isHome) {
      event.preventDefault();
      goToHomeSection(link.section);
      return;
    }

    if (!DEDICATED_ROUTES.has(link.section)) {
      event.preventDefault();
      navigate(`/#${link.section}`);
    }
  };

  const isActive = (link) => {
    if (isHome) return activeSection === link.section;

    if (location.pathname === '/about') return link.section === 'about';
    if (location.pathname === '/services') return link.section === 'services';
    if (location.pathname === '/projects') return link.section === 'projects';
    if (location.pathname === '/contact') return link.section === 'contact';

    return false;
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link
            to="/"
            className="navbar__logo"
            aria-label="AMRA Construction home"
            onClick={() => {
              setMenuOpen(false);
              setActiveSection(null);
            }}
          >
            <span className="navbar__brand-row">
              <img
                className="navbar__wordmark"
                src={amraWordmark}
                alt="AMRA"
              />
              <img
                className="navbar__seal"
                src={amraLogo}
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className="navbar__logo-sub">Construction</span>
          </Link>

          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link);

              if (isHome) {
                return (
                  <a
                    key={link.label}
                    href={`#${link.section}`}
                    className={`navbar__link ${active ? 'navbar__link--active' : ''}`}
                    aria-current={active ? 'location' : undefined}
                    onClick={(event) => handleNavigation(event, link)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={`navbar__link ${active ? 'navbar__link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onClick={(event) => handleNavigation(event, link)}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="navbar__actions">
            <a
              href={company.phoneHref}
              className="navbar__phone"
              aria-label={`Call ${company.phone}`}
            >
              <Phone size={15} strokeWidth={1.6} aria-hidden="true" />
              <span>{company.phone}</span>
            </a>

            {/* ✅ WhatsApp link */}
            <a
              href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`}
              className="navbar__whatsapp"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} strokeWidth={1.6} />
            </a>

            <Link to="/contact" className="navbar__cta">
              Get a Quote
            </Link>

            <button
              type="button"
              className="navbar__burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}