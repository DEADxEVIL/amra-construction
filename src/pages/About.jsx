import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { company, stats } from '../data/company';
import SectionLabel from '../components/SectionLabel';
import WhyAmra from '../components/WhyAmra';
import CTA from '../components/CTA';
import './PageHero.css';
import './AboutPage.css';

export default function About() {
  useEffect(() => {
    document.title = 'About AMRA Construction';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionLabel>About AMRA</SectionLabel>
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Bringing imagination to real-life structures.
          </motion.h1>
        </div>
      </section>

      <section className="section about-page">
        <div className="container about-page__grid">
          <div className="about-page__body">
            <p className="about-page__lead">{company.description}</p>
            <p className="text-secondary">{company.offering}</p>
            <p className="text-secondary">
              {company.fullName} is based in {company.address.city}, {company.address.state},
              and works across residential and commercial projects with the
              support of civil engineers and a skilled team of labour, masons
              and vendors.
            </p>
          </div>

          <ul className="about-page__stats">
            {stats.map((stat) => (
              <li key={stat.id}>
                <span className="about-page__stat-value">{stat.value}</span>
                <span className="about-page__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyAmra />
      <CTA />
    </>
  );
}
