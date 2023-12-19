// src/components/Footer.js
import React from 'react';
import './footer.css';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="social-section">
        <div className="social-title">Get connected with us on social networks:</div>
        <div className="social-links">
          <a href="#" className="social-link"><FaFacebook /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
          <a href="#" className="social-link"><FaLinkedin /></a>
          <a href="#" className="social-link"><FaGithub /></a>
        </div>
      </section>

      <section className="footer-content">
        <div className="footer-section">
          <h6 className="footer-heading">Trendify</h6>
          <p style={{color:"silver"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt eos exercitationem fugiat placeat, ipsa distinctio perspiciatis vero rem animi cum.
          </p>
        </div>

        <div className="footer-section">
          <h6 className="footer-heading">Products</h6>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Shirts</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Jeans</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Pant</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Shoes</a></p>
        </div>

        <div className="footer-section">
          <h6 className="footer-heading">Useful links</h6>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}} >Pricing</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Settings</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Orders</a></p>
          <p><a href="#" style={{color:"silver", textDecoration:"none"}}>Help</a></p>
        </div>

        <div className="footer-section">
          <h6 className="footer-heading">Contact</h6>
          <p style={{color:"silver"}}><span className="icon"><FaHome /></span>Dwarka, New Delhi, IN</p>
          <p style={{color:"silver"}}><span className="icon"><FaEnvelope /></span>adityaankitasingh@gmail.com</p>
          <p style={{color:"silver"}}><span className="icon"><FaPhone /></span>+91 9315920610</p>
        </div>
      </section>

      <div className="copyright" style={{color:"silver"}}>
        © {new Date().getFullYear()} Copyright: Trendify
      </div>
    </footer>
  );
};

export default Footer;
