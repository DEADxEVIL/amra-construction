import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/company';
import './Stats.css';

function CountUp({ value, active }) {
  const [display, setDisplay] = useState(0);
  const [showPlus, setShowPlus] = useState(false);

  // Check if the value is a string with a plus sign
  const isPlusValue = typeof value === 'string' && value.includes('+');
  // Extract the numeric part if it's a plus value
  const numericValue = isPlusValue ? parseInt(value.replace(/[^0-9]/g, ''), 10) : value;

  useEffect(() => {
    if (!active) return;

    // If it's a plus value, we animate to the number then show the plus
    if (isPlusValue) {
      const duration = 1400;
      const start = performance.now();

      let frame;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * numericValue));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          // Animation complete – show the plus sign
          setShowPlus(true);
        }
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }

    // Regular number animation
    const duration = 1400;
    const start = performance.now();

    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numericValue));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, numericValue, isPlusValue]);

  // If the value is a plain number, pad it and return
  if (!isPlusValue) {
    return <>{String(display).padStart(2, '0')}</>;
  }

  // For plus values: show the number + plus sign when animation is done
  return (
    <>
      {String(display).padStart(2, '0')}
      {showPlus && <span className="stats__plus">+</span>}
    </>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="stats section" ref={ref}>
      <div className="container stats__grid">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            className="stats__item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="stats__number">
              <CountUp value={stat.value} active={inView} />
            </span>
            <span className="stats__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}