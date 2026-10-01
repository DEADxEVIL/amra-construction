import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { X, Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/company';
import './MobileMenu.css';

export default function MobileMenu({ open, onClose, links, activeSection }) {
  const navigate = useNavigate();

  const handleClick = (to) => {
    if (to.startsWith('/#')) {
      navigate(to);
    }
    onClose();
  };

  const isActive = (link) => {
    if (link.to.startsWith('/#')) {
      return activeSection === link.section;
    }
    return window.location.pathname === link.to;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu__top">
            <span className="mobile-menu__logo">AMRA</span>
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={onClose}
            >
              <X size={26} strokeWidth={1.6} />
            </button>
          </div>

          <nav className="mobile-menu__links" aria-label="Mobile primary">
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={link.to}
                  className={isActive(link) ? 'mobile-menu__link--active' : ''}
                  onClick={() => handleClick(link.to)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mobile-menu__bottom">
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <a href={company.phoneHref} className="mobile-menu__phone">
                <Phone size={16} strokeWidth={1.6} />
                {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`}
                className="mobile-menu__whatsapp"
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} strokeWidth={1.6} />
              </a>
            </div>
            <Link to="/contact" className="mobile-menu__cta" onClick={onClose}>
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}