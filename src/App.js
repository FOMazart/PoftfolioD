import Header from './Header/Header';
import React from 'react';
import SideButtons from './components/SideButtons/SideButtons';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/FooterBlock';
import './App.css';
import './styles.css'


function App() {
  return (
    <div className="App">
      <Header />
      <SideButtons />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;