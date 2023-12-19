// Carousel.js
import React from 'react';
import './home.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section id="intro">
    <div className="introContent">
      <span className="introText">Elevate Your Wardrobe<br/>with <span className="introName">Trendify</span></span>
      <p className="introPara">Where Every Outfit Tells a Story!!</p>
      <Link to="works" spy={true} offset={-70} smooth={true}  duration={500}><button className="btn"><img src="shop.png" className="btnImg" alt="hire me"/>Shop Now</button></Link>
    </div>
     <img src='header-img.jpg' alt="profile" className="bg" />
</section>
  );
};

export default Header;
