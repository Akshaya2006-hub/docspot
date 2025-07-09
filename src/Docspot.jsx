import React, { useState, useEffect } from 'react';
import './DocSpot.css';

const DocSpot = () => {
  const [activeSection, setActiveSection] = useState('');
  const [navbarOpacity, setNavbarOpacity] = useState(0.95);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change on scroll
      if (window.scrollY > 50) {
        setNavbarOpacity(0.98);
      } else {
        setNavbarOpacity(0.95);
      }

      // Active link tracking
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleCtaClick = (e) => {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      e.target.style.transform = 'scale(1)';
    }, 150);
  };

  return (
    <div className="docspot-app">
      {/* Navigation */}
      <nav className="navbar" style={{ background: `rgba(44, 62, 80, ${navbarOpacity})` }}>
        <div className="nav-container">
          <div className="logo">DocSpot</div>
          <ul className="nav-links">
            <li>
              <a 
                href="#problem" 
                className={activeSection === 'problem' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('#problem'); }}
              >
                Problem
              </a>
            </li>
            <li>
              <a 
                href="#solution" 
                className={activeSection === 'solution' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('#solution'); }}
              >
                Solution
              </a>
            </li>
            <li>
              <a 
                href="#business" 
                className={activeSection === 'business' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('#business'); }}
              >
                Business Model
              </a>
            </li>
            <li>
              <a 
                href="#roadmap" 
                className={activeSection === 'roadmap' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('#roadmap'); }}
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>DocSpot</h1>
          <p className="tagline">Your Village Health Booth - Bringing Hospital-Level Care to Rural India</p>
          <button className="cta-button" onClick={handleCtaClick}>
            Transform Healthcare Today
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="container">
          <h2 className="section-title">The Healthcare Crisis</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>Twelve-year-old Ravi fainted during his school assembly. The teacher thought it was just heat. But Ravi's blood pressure was dangerously low. The nearest clinic was 25 km away, and his parents couldn't afford the journey that day.</p>
              <br />
              <p>This is daily reality in India, where over 95% of villages lack even basic clinics. People travel long distances for simple checks like blood pressure, fever, or oxygen levels. Small health issues become big emergencies because care is delayed.</p>
              <br />
              <p>Millions suffer not from lack of treatments — but from lack of timely diagnosis. Rural communities desperately need affordable, local health screening solutions.</p>
            </div>
            <div className="problem-highlight">
              <div className="highlight-number">95%+</div>
              <p>Villages Without Basic Healthcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">6.4L</div>
              <div className="stat-label">Villages in India</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">31,882</div>
              <div className="stat-label">Primary Health Centers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%+</div>
              <div className="stat-label">Villages Without PHCs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="container">
          <h2 className="section-title">The Solution: DocSpot</h2>
          <div className="solution-grid">
            <div className="solution-features">
              <div className="feature-item">
                <div className="feature-icon">🩺</div>
                <div className="feature-title">Comprehensive Health Checks</div>
                <p>Blood pressure, oxygen saturation, heart rate, and body temperature monitoring</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🗣️</div>
                <div className="feature-title">Local Language Support</div>
                <p>Easy touchscreen or voice input with instant health analysis in regional languages</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-title">Smart Connectivity</div>
                <p>Connects to doctors via video call when needed, with printout of results and advice</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-title">Cost-Effective</div>
                <p>Significantly cheaper than building physical clinics, accessible to all income levels</p>
              </div>
            </div>
            <div className="solution-visual">
              <div className="device-mockup">
                <div className="device-screen">
                  <div className="health-icon">❤️</div>
                  <h3>Health Check</h3>
                  <p>Digital clinic at your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business" className="business-section">
        <div className="container">
          <h2 className="section-title">Sustainable Business Model</h2>
          <div className="business-grid">
            <div className="business-item">
              <h3 className="business-title">Government Partnerships</h3>
              <p>Health departments pay per patient screened, aligning with public health goals for widespread coverage and preventive care.</p>
            </div>
            <div className="business-item">
              <h3 className="business-title">CSR Funding</h3>
              <p>NGOs and corporations fund DocSpot deployments as part of their Corporate Social Responsibility initiatives.</p>
            </div>
            <div className="business-item">
              <h3 className="business-title">Micro-Payments</h3>
              <p>Villagers contribute a small, affordable fee (₹10-₹20) per check-up, ensuring perceived value and sustainability.</p>
            </div>
            <div className="business-item">
              <h3 className="business-title">Pharmacy & Franchise</h3>
              <p>Partnerships with local pharmacies for medicine sales, and future franchise model for rapid expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="roadmap-section">
        <div className="container">
          <h2 className="section-title">Future Roadmap</h2>
          <div className="roadmap-timeline">
            <div className="roadmap-item">
              <div className="roadmap-icon">🔬</div>
              <div className="roadmap-content">
                <h3 className="roadmap-phase">Phase 1: Build Prototype</h3>
                <p>Developing a robust, functional initial model for testing and validation in controlled environments.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-icon">📍</div>
              <div className="roadmap-content">
                <h3 className="roadmap-phase">Phase 2: Pilot in Villages</h3>
                <p>Testing and refining in 1-2 villages, gathering crucial user feedback and optimizing the system.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-icon">🧪</div>
              <div className="roadmap-content">
                <h3 className="roadmap-phase">Phase 3: Add More Tests</h3>
                <p>Expanding capabilities to include sugar, hemoglobin, and other vital diagnostics for comprehensive care.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-icon">💻</div>
              <div className="roadmap-content">
                <h3 className="roadmap-phase">Phase 4: Telemedicine Connect</h3>
                <p>Integrating with online doctor consultations for comprehensive healthcare delivery.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-icon">📈</div>
              <div className="roadmap-content">
                <h3 className="roadmap-phase">Phase 5: Scale to Hundreds</h3>
                <p>Broad deployment across India, reaching countless underserved communities nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocSpot;