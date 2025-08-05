import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

import resume1 from '../assets/resume1.png';
import resume2 from '../assets/resume2.png';
import resume3 from '../assets/resume3.png';
import resume4 from '../assets/resume4.png';
import { useNavigate } from 'react-router-dom';
import PaymentButton from './PaymentButton';


const resumes = [resume1, resume2, resume3, resume4];

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">Best AI Resume Builder</p>

          <h1 className="hero-title">
            Your success story<br />begins with a <span className="highlight">resume.</span>
          </h1>

          <p className="hero-subtext">
            Create a beautiful resume quickly with customizable templates.
          </p>

          <div className="hero-buttons">
      <button className="btn primary" onClick={() => navigate('/builder')}>
        Create My Resume
      </button>
          </div>
          <div>
          <PaymentButton />
        </div>

          <p className="trusted-text">
            Trusted by 6 million successful job seekers worldwide.
          </p>

        </motion.div>


        <div className="hero-right">
          <motion.div
            className="carousel-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear'
            }}
          >
            {[...resumes, ...resumes].map((img, i) => (
              <img key={i} src={img} alt={`resume-${i}`} className="resume-img" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
