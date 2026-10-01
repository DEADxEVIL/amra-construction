import { useEffect } from 'react';
import Contact from '../components/Contact';
import './PageHero.css';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | AMRA Construction';
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero__title">Get in touch with us</h1>
          <p className="page-hero__sub">
            We’re here to answer your questions and help you get started.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}