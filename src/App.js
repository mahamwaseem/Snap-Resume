import './App.css';
import Header from "./myComponents/Header";
import Footer from './myComponents/Footer';
import HeroSection from './myComponents/HeroSection';
import FeaturesSection from './myComponents/FeatureSection';
import HowItWorks from './myComponents/Howitworks';
import Testimonials from './myComponents/Testimonials';
import ResumeBuilder from './myComponents/ResumeBuilder';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from "./myComponents/Success"

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
          <Route path="/success" element={<Success />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
