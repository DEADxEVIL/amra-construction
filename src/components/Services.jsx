import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import SectionLabel from './SectionLabel';
import ServiceCard from './ServiceCard';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__header">
          <div>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="services__title">Complete solutions under one roof.</h2>
          </div>
          <Link to="/services" className="services__view-all">
            View all services
            <ArrowRight size={16} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
