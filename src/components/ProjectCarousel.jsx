import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectCarousel.css';

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[current];

  return (
    <section id="projects" className="project-carousel section">
      <div className="container project-carousel__inner">
        <div className="project-carousel__header">
          <span className="eyebrow">Our Work</span>
          <h2 className="project-carousel__title">Featured Projects</h2>
        </div>

        <div className="project-carousel__track">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              className="project-carousel__slide"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={project.image}
                alt={`${project.name} residence in ${project.location}`}
                className="project-carousel__image"
                loading="lazy"
              />
              <div className="project-carousel__content">
                <h3 className="project-carousel__name">{project.name}</h3>
                <p className="project-carousel__location">{project.location}</p>
                <Link to={project.slug} className="project-carousel__link">
                  View Project
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            className="project-carousel__arrow project-carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            className="project-carousel__arrow project-carousel__arrow--next"
            onClick={next}
            aria-label="Next project"
          >
            <ChevronRight size={24} strokeWidth={1.6} />
          </button>
        </div>

        <div className="project-carousel__dots">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`project-carousel__dot ${i === current ? 'project-carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}