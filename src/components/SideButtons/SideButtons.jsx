import React, { useState, useEffect } from 'react';
import './SideButtons.css';
  
const SideButtons = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="side-buttons">
      <nav>
        <ul>
          {[
            { id: 'home', icon: '../../assets/icons/home_icon.svg' },
            { id: 'about', icon: '../../assets/icons/about_icon.svg' },
            { id: 'work', icon: '../../assets/icons/work_icon.svg' },
            { id: 'contact', icon: '../../assets/icons/contact_icon.svg' }
          ].map(({ id, icon }) => (
            <li key={id}>
              <button 
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? 'active' : ''}
              >
                <img 
                  src={icon}
                  className={activeSection === id ? 'active-img' : ''}
                  alt={id}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideButtons;


