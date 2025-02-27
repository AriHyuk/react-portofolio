import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import HireMe from './pages/Hire-me';
import Footer from './components/Footers';
import Certifity from './pages/Certifity';
import NotFound from './pages/404'; // Pastikan ini diekspor dengan benar

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          {/* Route utama */}
          <Route
            path="/"
            element={
              <>
                <div id="hero">
                  <HeroSection />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="portfolio">
                  <Portfolio />
                </div>
                <div id="certifity">
                  <Certifity />
                </div>
                <div id="hire-me">
                  <HireMe />
                </div>
              </>
            }
          />

          {/* Halaman Tidak Ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
