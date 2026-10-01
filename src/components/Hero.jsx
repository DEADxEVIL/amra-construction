import { motion } from 'framer-motion';
import { company } from '../data/company';
import BlueprintOverlay from './BlueprintOverlay';
import Button from './Button';
import './Hero.css';

const headline = ['We design.', 'We engineer.', 'We build.'];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const lineVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <BlueprintOverlay />

      <div className="hero__content container">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {company.fullName}
        </motion.p>

        <motion.h1
          className="hero__headline"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {headline.map((line, i) => (
            <motion.span
              key={line}
              className={`hero__line ${i === 2 ? 'hero__line--accent' : ''}`}
              variants={lineVariant}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {company.tagline} {company.offering}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button to="/contact" variant="primary">Start Your Project</Button>
          <Button to="/projects" variant="secondary">Explore Our Work</Button>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-drop" />
        </div>
      </div>

      <div className="hero__baseline" aria-hidden="true" />
    </section>
  );
}