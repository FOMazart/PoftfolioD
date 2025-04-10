import react, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [stopPosition, setStopPosition] = useState(0);

    useEffect(() => {
        const updateStopPosition = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                setStopPosition(aboutSection.offsetTop);
            }
        };

        updateStopPosition();
        window.addEventListener('resize', updateStopPosition);

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', updateStopPosition);
        };
    }, []);

    const scrollProgress = Math.min(scrollPosition / stopPosition, 1);
    
    const headerStyle = {
        transform: scrollPosition <= stopPosition 
            ? `translateY(${Math.min(scrollPosition * 0.1, 30)}px)`
            : `translateY(30px)`,
        backgroundColor: `rgba(15, 16, 63, ${Math.min(0.4 + scrollProgress, 1)})`,
        transition: 'all 0.3s ease',
    };

    const logoStyle = {
        transform: scrollPosition <= stopPosition 
            ? `translateY(${Math.min(scrollPosition * 0.1, 30)}px)`
            : `translateY(30px)`,
        transition: 'all 0.3s ease'
    };

    return (
        <header className="head" style={headerStyle}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <img 
                                src="assets/Logoname.svg"
                                alt="logo"
                                className="logon"
                                style={logoStyle}
                            />
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;