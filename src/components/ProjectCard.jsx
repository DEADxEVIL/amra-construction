import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={project.slug} className="project-card__link">
        <div className="project-card__image-wrapper">
          <img
            src={project.image}
            alt={`${project.name} residence in ${project.location}`}
            className="project-card__image"
            loading="lazy"
          />
          <div className="project-card__overlay">
            <span className="project-card__number">{project.number}</span>
          </div>
        </div>
        <div className="project-card__content">
          <h3 className="project-card__name">{project.name}</h3>
          <p className="project-card__location">{project.location}</p>
          <div className="project-card__meta">
            <span>{project.area} sq ft</span>
            <span>{project.floors}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}