import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={service.slug} className="service-card">
        <div className="service-card__top">
          <span className="service-card__number">{service.number}</span>
          <Icon size={24} strokeWidth={1.3} className="service-card__icon" />
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__summary text-secondary">{service.summary}</p>
        <span className="service-card__arrow" aria-hidden="true">
          <Icons.ArrowRight size={16} strokeWidth={1.6} />
        </span>
      </Link>
    </motion.div>
  );
}
