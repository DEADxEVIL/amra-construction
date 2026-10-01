import { useEffect } from 'react';
import { projects } from '../data/projects';
import SectionLabel from '../components/SectionLabel';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';
import './PageHero.css';
import './ProjectsPage.css';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | AMRA Construction';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionLabel>Our Projects</SectionLabel>
          <h1 className="page-hero__title">Recent work, built across Bihar.</h1>
          <p className="page-hero__sub">
            A selection of homes AMRA has designed and constructed for
            clients in Purnea and Forbesganj.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container projects-page__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
