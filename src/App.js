import './App.css';
import Header from "./myComponents/Header";
import Footer from './myComponents/Footer';
import HeroSection from './myComponents/HeroSection';
import FeaturesSection from './myComponents/FeatureSection';
import HowItWorks from './myComponents/Howitworks';
import Testimonials from './myComponents/Testimonials';
import ResumeBuilder from './myComponents/ResumeBuilder';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <HowItWorks />
              <Testimonials />
            </>
          } />

          <Route path="/builder" element={<ResumeBuilder />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
