import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import BackgroundVideo from './components/BackgroundVideo';
import GlobalOverlay from './components/GlobalOverlay';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ProcessIndicator from './components/ProcessIndicator';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ContactPage from './pages/Contact';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      const attemptScroll = (attempts = 0) => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else if (attempts < 5) {
          setTimeout(() => attemptScroll(attempts + 1), 200);
        }
      };

      attemptScroll();
    }
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ErrorBoundary>
        <BackgroundVideo />
        <GlobalOverlay />
        <ScrollProgress />
        <Navbar />
        <ProcessIndicator />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </div>

        <FloatingWhatsApp />

        <ScrollToHash />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;