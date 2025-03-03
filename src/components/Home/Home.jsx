import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className='introduction'>
        <h1>Creative UI Designer
            Sourasith Phomhome
            Based in Montreal</h1>
        
        <div className='buttons'>
           <button className='cta'>Hire me</button>
           <button className='cta'>Download CV</button>
        </div>


      </div>

  

      <img src="assets/Illustration.svg" alt="logo" className="ill pulse" />
      <img src="assets/Group.svg" alt="logo" className="group pulse" />
    </section>


  );
};

export default Home;