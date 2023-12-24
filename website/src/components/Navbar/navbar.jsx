import React, { useState }  from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div class="header">
  <a href="#default" class="logo" style={{color:'#d4baff'}}>Trendify</a>
  {/* ---- <a href="#home" style={{color:"white"}}>About</a> 
  <ScrollLink to="category" smooth={true} duration={500} style={{cursor:'pointer',color:"white"}}>Categories</ScrollLink>  -----*/}

  <div class="header-right">
  <ScrollLink to="category" smooth={true} duration={500} style={{cursor:'pointer',color:"white"}}>Categories</ScrollLink>
    <Link to="/cart"><img src="heart.png" alt="heart" height={"20px"} /></Link>
    <ScrollLink to="contact" smooth={true} duration={500} style={{cursor:'pointer'}}><img src="support.png" alt="heart" height={"20px"} /></ScrollLink>
    <a href="#about"><img src="user.png" alt="heart" height={"20px"} /></a>
    
  </div>
</div>
    )
}

export default Navbar;