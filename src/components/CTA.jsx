import { motion } from 'framer-motion';
import Button from './Button';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="cta__title">Ready to build your dream home?</h2>
          <p className="cta__sub text-secondary">
            Let’s turn your vision into reality. Get in touch with our team today.
          </p>
          <Button to="/contact" variant="primary">Start Your Project</Button>
        </motion.div>
      </div>
    </section>
  );
}