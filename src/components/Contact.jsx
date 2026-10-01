import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'; // 👈 added MessageCircle
import { company } from '../data/company';
import './Contact.css';

// Helper: clean phone number for WhatsApp
const cleanPhone = (phone) => phone.replace(/[^0-9]/g, '');
const waNumber = cleanPhone(company.phone);
// Predefined message for WhatsApp
const waMessage = `Hello AMRA Construction,

I would like to get more information about your services.

Thank you!`;

export default function Contact() {
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact__info">
            <h2 className="contact__title">Get in Touch</h2>
            <p className="contact__desc text-secondary">
              We’re here to answer your questions and help you plan your project.
            </p>
            <ul className="contact__details">
              <li>
                <div className="contact__phone-group">
                  <a href={company.phoneHref} className="contact__phone-link" aria-label="Call us">
                    <Phone size={18} strokeWidth={1.4} />
                    <span>{company.phone}</span>
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__whatsapp-link"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle size={18} strokeWidth={1.4} />
                  </a>
                </div>
              </li>
              <li>
                <Mail size={18} strokeWidth={1.4} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <MapPin size={18} strokeWidth={1.4} />
                <span>
                  {company.address.line1}, {company.address.city}, {company.address.state} {company.address.pin}
                </span>
              </li>
            </ul>
          </div>
          <div className="contact__map">
            <iframe
              src={company.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMRA Construction location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}