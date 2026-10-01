import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects, getProjectBySlug } from '../data/projects';
import Button from '../components/Button';
import CTA from '../components/CTA';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name}, ${project.location} | AMRA Construction`;
    }
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="project-detail-hero">
        <img
          src={project.image}
          alt={`${project.name} residence in ${project.location}`}
          className="project-detail-hero__image"
        />
        <div className="project-detail-hero__scrim" />
        <div className="container project-detail-hero__content">
          <Link to="/projects" className="project-detail-hero__back">
            <ArrowLeft size={15} strokeWidth={1.6} />
            All projects
          </Link>
          <motion.h1
            className="project-detail-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.name}
          </motion.h1>
          <span className="project-detail-hero__location">{project.location}</span>
        </div>
      </section>

      <section className="section">
        <div className="container project-detail__specs">
          <div>
            <span className="project-detail__spec-label">Area</span>
            <span className="project-detail__spec-value">{project.area} sq ft</span>
          </div>
          <div>
            <span className="project-detail__spec-label">Floors</span>
            <span className="project-detail__spec-value">{project.floors}</span>
          </div>
          <div>
            <span className="project-detail__spec-label">Location</span>
            <span className="project-detail__spec-value">{project.location}</span>
          </div>
          <Button to="/contact" variant="primary">Start a Similar Project</Button>
        </div>
      </section>

      <section className="section project-detail__more">
        <div className="container">
          <h2 className="project-detail__more-title">More projects</h2>
          <div className="project-detail__more-grid">
            {others.map((p) => (
              <Link key={p.id} to={p.slug} className="project-detail__more-item">
                <img src={p.image} alt={`${p.name} residence`} loading="lazy" />
                <span>{p.name}, {p.location}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
