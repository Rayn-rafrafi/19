import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return ( <>
    <footer className="footer" id="blog">
    <div className="container">

      <div className="footer-top">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src="logo.png" loading="lazy" alt="shoppie home"/>
          </a>

          <p className="footer-text">
            Main factor that sets us apart competition allows deliver a specialist business consultancy service applies
            its ranging experience
          </p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <FaFacebookF/>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                < FaWhatsapp/>
              </a>
            </li>

          </ul>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title title">Contact info</p>

            <address className="footer-text">
              Hay Ettahrire, Tunis <br/>
              Tunisie
            </address>
          </li>

          <li>
            <a href="mailto:info.shoppie@support.com" className="email">info.shoppie@support.com</a>
          </li>

          <li>
            <a href="tel:+00 123 456 789" className="call">+216 25 970 912</a>
          </li>

        </ul>

        <div className="footer-list">

          <p className="footer-list-title title">Subscribe newsletter</p>

          <input type="email" name="email_address" placeholder="Enter your email address" required className="input-field"/>

          <button className="btn btn-secondary">Subscribe</button>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="wrapper">
          <div className="link-wrapper">
            <a href="#" className="footer-bottom-link">Pricing Plan</a>
            <a href="#" className="footer-bottom-link">Services</a>
            <a href="#" className="footer-bottom-link">Contact Us</a>

          </div>

          <div className="link-wrapper">
            <a href="#" className="footer-bottom-link">Terms & Conditions</a>

            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </div>
        </div>

        <p className="copyright">
          &copy; 2024 Ryan, All Rights Reserved
        </p>

      </div>

      <div loading="lazy" alt="shape"
        className="shape shape-1"> </div>

      <div  loading="lazy" alt="shape"
        className="shape shape-2"> </div>

      <div  loading="lazy" alt="shape"
        className="shape shape-3"> </div>

    </div>
  </footer>
    </> );
}
 
export default Footer;