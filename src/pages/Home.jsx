import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import WhyAmra from '../components/WhyAmra';
import Services from '../components/Services';
import ProcessTimeline from '../components/ProcessTimeline';
import ProjectCarousel from '../components/ProjectCarousel';
import PackagesSection from '../components/PackagesSection';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    document.title = 'AMRA Construction | Design, Engineering & Construction';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <WhyAmra />
      <Services />
      <ProcessTimeline />
      <ProjectCarousel />
      <PackagesSection />
      <CTA />
      <Contact />
    </>
  );
}
