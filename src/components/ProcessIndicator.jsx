import { useEffect, useState } from 'react';
import { processSteps } from '../data/company';
import './ProcessIndicator.css';

const SECTION_IDS = ['hero', 'about', 'stats', 'why-amra', 'services', 'process'];

/**
 * Desktop: sticky vertical dots tracking which major section is in view,
 * labelled with AMRA's real workflow stages. Mobile: a compact horizontal
 * progress bar (rendered by the same component, styled differently).
 */
export default function ProcessIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) {
              // clamp to the 5 process steps (hero + about+stats share step 1/2)
              setActiveIndex(Math.min(idx, processSteps.length - 1));
            }
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="process-indicator" aria-label="Page progress">
      <ol className="process-indicator__list">
        {processSteps.map((step, i) => (
          <li
            key={step.id}
            className={`process-indicator__item ${
              i === activeIndex ? 'process-indicator__item--active' : ''
            } ${i < activeIndex ? 'process-indicator__item--done' : ''}`}
          >
            <span className="process-indicator__number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="process-indicator__label">{step.indicatorLabel}</span>
          </li>
        ))}
        <div
          className="process-indicator__track"
          style={{ '--progress': activeIndex / (processSteps.length - 1) }}
          aria-hidden="true"
        />
      </ol>
    </nav>
  );
}
