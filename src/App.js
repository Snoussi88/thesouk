import { React } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
