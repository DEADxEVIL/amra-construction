import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { company } from '../data/company';
import SectionLabel from './SectionLabel';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <motion.div
          className="about__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>About AMRA</SectionLabel>
          <h2 className="about__title">
            Construction is more than building. It is turning an idea into
            something real.
          </h2>
        </motion.div>

        <motion.div
          className="about__body"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about__text">{company.description}</p>
          <p className="about__text text-secondary">{company.offering}</p>
          <Link to="/about" className="about__link">
            Learn more about AMRA
            <ArrowRight size={16} strokeWidth={1.6} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
