import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SermonsPage from './pages/SermonsPage';
import SermonDetailPage from './pages/SermonDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import MinistriesPage from './pages/MinistriesPage';
import AboutPage from './pages/AboutPage';
import GivePage from './pages/GivePage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream text-slate-800">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/sermons/:id" element={<SermonDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
