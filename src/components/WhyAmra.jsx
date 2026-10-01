import { motion } from 'framer-motion';
import { ShieldCheck, Settings2, HandCoins, Timer } from 'lucide-react';
import { whyAmra } from '../data/company';
import SectionLabel from './SectionLabel';
import './WhyAmra.css';

const ICONS = {
  'build-quality': ShieldCheck,
  'execution-expertise': Settings2,
  'budget-transparency': HandCoins,
  'on-time-handover': Timer,
};

export default function WhyAmra() {
  return (
    <section id="why-amra" className="why section">
      <div className="container">
        <div className="why__header">
          <SectionLabel>Why AMRA</SectionLabel>
          <h2 className="why__title">
            We design and build a luxurious modern home according to your
            needs and budget.
          </h2>
        </div>

        <div className="why__grid">
          {whyAmra.map((item, i) => {
            const Icon = ICONS[item.id];
            return (
              <motion.article
                key={item.id}
                className="why-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="why-card__top">
                  <span className="why-card__number">{item.number}</span>
                  <Icon size={22} strokeWidth={1.4} className="why-card__icon" />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc text-secondary">{item.description}</p>
                <span className="why-card__line" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
