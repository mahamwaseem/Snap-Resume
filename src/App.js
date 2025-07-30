import logo from './assets/logo.png';  
import './App.css';
import Header from "./myComponents/Header";
import Footer from './myComponents/Footer';
import HeroSection from './myComponents/HeroSection';
import FeaturesSection from './myComponents/FeatureSection';
import HowItWorks from './myComponents/Howitworks';

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <HowItWorks/>
    <Footer/>
    </>
  );
}

export default App;
