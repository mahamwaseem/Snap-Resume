import React from 'react';
import './FeatureSection.css';
import { FaRocket, FaPenFancy, FaDownload } from 'react-icons/fa';

export default function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="features-title">What SnapResume Offers</h2>
      <div className="feature-items">
        <div className="feature">
          <FaRocket className="feature-icon" />
          <h4>Quick & Easy</h4>
          <p>Build your resume in just a few minutes.</p>
        </div>

        <div className="feature">
          <FaPenFancy className="feature-icon" />
          <h4>Stylish Templates</h4>
          <p>Choose from modern, clean designs.</p>
        </div>

        <div className="feature">
          <FaDownload className="feature-icon" />
          <h4>1-Click Download</h4>
          <p>Export your resume in PDF format instantly.</p>
        </div>
      </div>
    </section>
  );
}
