import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services, getServiceBySlug } from '../data/services';
import { BlueprintGrid } from '../components/BlueprintOverlay';
import Button from '../components/Button';
import CTA from '../components/CTA';
import './PageHero.css';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) document.title = `${service.title} | AMRA Construction`;
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = Icons[service.icon] || Icons.Building2;
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="page-hero service-detail-hero">
        <BlueprintGrid className="service-detail-hero__grid" />
        <div className="container">
          <Link to="/services" className="service-detail-hero__back">
            <ArrowLeft size={15} strokeWidth={1.6} />
            All services
          </Link>

          <div className="service-detail-hero__top">
            <span className="service-detail-hero__number">{service.number}</span>
            <Icon size={30} strokeWidth={1.3} className="service-detail-hero__icon" />
          </div>

          <h1 className="page-hero__title">{service.title}</h1>
          <p className="page-hero__sub">{service.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail__body">
          <p className="service-detail__desc">{service.description}</p>
          <Button to="/contact" variant="primary">Start Your Project</Button>
        </div>
      </section>

      <section className="section service-detail__related">
        <div className="container">
          <h2 className="service-detail__related-title">Related services</h2>
          <ul className="service-detail__related-list">
            {related.map((s) => (
              <li key={s.id}>
                <Link to={s.slug}>
                  <span>{s.number}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
