import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"; // Custom styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">
          Empowering <span className="highlight">SMEs</span> with <br />
          <span className="highlight">Affordable Tenders</span> & Seamless Collaboration
        </h1>
        <p className="subtitle">
          A <strong>community hub</strong> designed for small businesses to <strong>explore, collaborate, and win</strong> tenders efficiently.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="cta-button"
        >
          <Link to="/signup">Get Started</Link>
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="feature-card">
          <h3>🔍 Find & Apply for Tenders</h3>
          <p>Explore verified tenders tailored for SMEs at competitive prices.</p>
        </div>
        <div className="feature-card">
          <h3>🤝 Connect & Collaborate</h3>
          <p>Join a community hub to team up and bid together for success.</p>
        </div>
        <div className="feature-card">
          <h3>💡 Smart & Secure Bidding</h3>
          <p>Make informed bidding decisions with transparent opportunities.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
