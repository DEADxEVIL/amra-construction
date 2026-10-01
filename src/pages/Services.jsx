import { useEffect } from 'react';
import { services } from '../data/services';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import '../components/Services.css';
import './PageHero.css';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | AMRA Construction';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="page-hero__title">Complete solutions under one roof.</h1>
          <p className="page-hero__sub">
            From the first sketch to the final handover, AMRA covers design,
            engineering and construction as one connected process.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
