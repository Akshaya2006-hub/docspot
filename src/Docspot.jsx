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

    {/* New Paragraph Section */}
    <div className="solution-learning">
      <p>
        The system will be designed to handle only basic conditions like fever
        , cold, or flu. However, when a case requires a doctor consultation via video call,
         the system learns from that interaction. For example, if a patient experiences fever and flu for three days,
          it connects to a doctor. During the consultation, the machine observes the diagnostic process to understand how such cases differ from normal conditions.
           Over time, this enables improved pattern recognition and smarter health assessments.
      </p>
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How DocSpot Works: Simple, Accessible, Smart</h2>
          <div className="workflow-container">
            <div className="workflow-step">
              <div className="step-box welcome-screen">
                <div className="step-header">WELCOME SCREEN</div>
                <div className="step-content">
                  <p>Welcome to DocSpot!</p>
                  <div className="start-button">Start</div>
                </div>
              </div>
              <div className="arrow-down">↓</div>
            </div>
            
            <div className="workflow-step">
              <div className="step-box symptom-selection">
                <div className="step-header">SYMPTOM SELECTION</div>
                <div className="step-content">
                  <p>What's your problem today?</p>
                  <div className="input-options">
                    <div className="text-input">📝</div>
                    <div className="voice-input">🎤</div>
                  </div>
                </div>
              </div>
              <div className="arrow-down">↓</div>
            </div>
            
            <div className="workflow-step">
              <div className="step-box vitals-measurement">
                <div className="step-header">VITALS MEASUREMENT</div>
                <div className="step-content">
                  <ul>
                    <li>- BP check</li>
                    <li>- Heart rate</li>
                    <li>- Temp check</li>
                    <li>- SpO₂ check</li>
                  </ul>
                </div>
              </div>
              <div className="arrow-down">↓</div>
            </div>
            
            <div className="workflow-results">
              <div className="result-box normal-condition">
                <div className="result-header">NORMAL CONDITION</div>
                <div className="result-content">
                  <p>All readings normal.</p>
                  <p>Prints advice slip.</p>
                </div>
              </div>
              
              <div className="result-box mild-condition">
                <div className="result-header">MILD CONDITION</div>
                <div className="result-content">
                  <p>Mild condition</p>
                  <p>Connect to Doctor via video call</p>
                  <p>Prints prescription slip</p>
                  <p>Dispense tablets</p>

                </div>
              </div>
              
              <div className="result-box serious-condition">
                <div className="result-header">SERIOUS CONDITION</div>
                <div className="result-content">
                  <p>Connect to doctor via video call</p>
                  <p>or make appointment and bed arrangement in the nearby Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Budget Section */}
      <section className="prototype-budget-section">
        <div className="container">
          <h2 className="section-title">Detailed Prototype Budget: Complete Cost Breakdown</h2>
          <div className="budget-table">
            <div className="budget-row budget-header">
              <div className="item-name">Item</div>
              <div className="item-cost">Cost (₹)</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Digital BP Monitor (Omron HEM-7120)</div>
              <div className="item-cost">2,800</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Pulse Oximeter (BPL Smart Oxy)</div>
              <div className="item-cost">2,500</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Digital Thermometer (Omron MC-720)</div>
              <div className="item-cost">1,500</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Touchscreen Display (Waveshare 15.6")</div>
              <div className="item-cost">18,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Thermal Printer (Epson TM-T82X)</div>
              <div className="item-cost">9,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Tablet Dispenser Mechanism (Commercial Unit)</div>
              <div className="item-cost">10,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Hardware Enclosure / Cabinet (Custom Steel)</div>
              <div className="item-cost">22,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Intel NUC (Refurbished)</div>
              <div className="item-cost">27,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Webcam (Logitech C270 HD)</div>
              <div className="item-cost">2,500</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Speakers/Microphone (USB Conference Mic)</div>
              <div className="item-cost">2,500</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Power Backup (UPS 1000VA)</div>
              <div className="item-cost">4,000</div>
            </div>
            <div className="budget-row">
              <div className="item-name">Cables & Installation Materials</div>
              <div className="item-cost">3,000</div>
            </div>
            <div className="budget-row budget-total">
              <div className="item-name">Total Estimated Cost</div>
              <div className="item-cost">1,05,300</div>
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