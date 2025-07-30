// File: src/components/HowItWorks.js

import React from 'react';
import './Howitworks.css';
import { FaRegFileAlt, FaEdit, FaDownload } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps">
        <div className="step">
          <FaRegFileAlt className="step-icon" />
          <h4>1. Choose a Template</h4>
          <p>Select from modern, ATS-friendly resume designs.</p>
        </div>

        <div className="step">
          <FaEdit className="step-icon" />
          <h4>2. Enter Your Details</h4>
          <p>Fill in your personal information and work experience.</p>
        </div>

        <div className="step">
          <FaDownload className="step-icon" />
          <h4>3. Download Your Resume</h4>
          <p>Preview and export your resume in one click.</p>
        </div>
      </div>
    </section>
  );
}
