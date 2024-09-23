import logo from './logo.svg';
import './App.css';

import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
import Vision from './components/Vision/Vision';
import Products from './components/Products/Products';
import Vr from './components/Vr/Vr';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Vision/>
      <Products/>
      <Vr/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
