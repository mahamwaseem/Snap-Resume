import logo from './assets/logo.png';  
import './App.css';
import Header from "./myComponents/Header";
import Footer from './myComponents/Footer';
import HeroSection from './myComponents/HeroSection';
import FeaturesSection from './myComponents/FeatureSection';
import HowItWorks from './myComponents/Howitworks';
import Testimonials from './myComponents/Testimonials';

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <HowItWorks/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
