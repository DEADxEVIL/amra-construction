import { MessageCircle } from 'lucide-react';
import { company } from '../data/company';
import './FloatingWhatsApp.css';

const cleanPhone = (phone) => phone.replace(/[^0-9]/g, '');

export default function FloatingWhatsApp() {
  const phone = cleanPhone(company.phone);

  const message = `Hello AMRA Construction,

I would like to get more information about your construction and design services.

Thank you!`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with AMRA Construction on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle
        size={24}
        strokeWidth={1.8}
        aria-hidden="true"
      />

      <span className="floating-whatsapp__label">
        WhatsApp
      </span>
    </a>
  );
}