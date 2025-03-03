import react from "react";
import "./Header.css";

    const Header = () => {
        return (
            <header className="head">

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
                            <img src="assets/Logoname.svg"
                            alt="logo"
                            className="logon"/>
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