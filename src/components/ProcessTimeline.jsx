import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { processSteps } from '../data/company';
import SectionLabel from './SectionLabel';
import './ProcessTimeline.css';

const STEP_ICONS = ['ClipboardList', 'Compass', 'Calculator', 'HardHat', 'BadgeCheck'];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="process-tl section">
      <div className="container">
        <div className="process-tl__header">
          <SectionLabel>Process</SectionLabel>
          <h2 className="process-tl__title">From Drawing to Reality</h2>
        </div>

        <div className="process-tl__track">
          {processSteps.map((step, i) => {
            const Icon = Icons[STEP_ICONS[i]];
            const isActive = i === active;
            return (
              <button
                key={step.id}
                type="button"
                className={`process-tl__stage ${isActive ? 'process-tl__stage--active' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="process-tl__stage-line" aria-hidden="true" />
                <span className="process-tl__stage-icon">
                  <Icon size={20} strokeWidth={1.4} />
                </span>
                <span className="process-tl__stage-number">{step.number}</span>
                <span className="process-tl__stage-title">{step.title}</span>
              </button>
            );
          })}
        </div>

        <motion.p
          key={active}
          className="process-tl__desc"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {processSteps[active].description}
        </motion.p>
      </div>
    </section>
  );
}
