import react from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div>
          <nav>
              <ul>
                <li>
                  <img src="../../assets/icons/home_icon.svg" className="footer-icon" />
                  <a href="#home">Home</a>
                </li>
                <li>
                <img src="../../assets/icons/about_icon.svg" className="footer-icon" />
                  <a href="#about">About</a>
                </li>
                <li>
                <img src="../../assets/icons/work_icon.svg" className="footer-icon"  />
                  <a href="#work">Work</a>
                </li>
                <li>
                  <img src="../../assets/icons/contact_icon.svg" className="footer-icon"  />
                  <a href="#contact">Contact</a>
                </li>

              </ul>
              <img src="../../assets/saturn.svg" className="saturn-img" />
              <div className="jupiter">
                <div className="orbit">
                  <img src="../../assets/commet.png" className="commet-img"></img>

                </div>
                <img src="../../assets/rings.svg" className="ring-img" />
              </div>

              <ul>

                <li>
                  <a href="https://www.instagram.com/">
                    <img src="../../assets/icons/instagram.svg" className="instagram-icon" />
                  </a>
                </li>


                <li>
                  <a href="https://twitter.com/">
                    <img src="../../assets/icons/twitter.svg" className="twitter-icon" />
                  </a>
                </li>


                <li>
                  <a href="https://www.facebook.com/">
                    <img src="../../assets/icons/facebook.svg" className="facebook-icon" />
                  </a>
                </li>
                
  
                <li>
                  <a href="https://www.linkedin.com/">
                  <img src="../../assets/icons/linkedin.svg" className="linkedin-icon" />
                  </a>
                </li>
              
              </ul>
          </nav>
        </div>
    </footer>
  );
};

export default Footer;