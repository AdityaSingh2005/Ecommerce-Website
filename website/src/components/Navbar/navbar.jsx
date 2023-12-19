import React, { useState }  from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };


  return (
    <div class="header">
  <a href="#default" class="logo" style={{color:'#d4baff'}}>Trendify</a>
  <a href="#home" style={{color:"white"}}>About</a>
    
    <div class="dropdown">
    <button class="dropbtn">Categories</button>
    <div class="dropdown-content">
      <div class="row">
        <div class="column">
          <h3 style={{color:'black', backgroundColor:'white', padding:'5px', borderRadius:'2px'}}>Men</h3>
          <a href="#">Shirts</a>
          <a href="#">Pants</a>
          <a href="#">Shoes</a>
        </div>
        <div class="column">
          <h3 style={{color:'black', backgroundColor:'white', padding:'5px', borderRadius:'2px'}}>Women</h3>
          <a href="#">Tops</a>
          <a href="#">Jacket</a>
          <a href="#">Denim</a>
        </div>
        <div class="column" style={{borderRadius:'0px 0px 0px 10px'}}>
          <h3 style={{color:'black', backgroundColor:'white', padding:'5px', borderRadius:'2px'}}>Accesories</h3>
          <a href="#">Jwelery</a>
          <a href="#">Watch</a>
          <a href="#">Rings</a>
        </div>
        <div class="column" style={{borderRadius:'0px 0px 10px 0px'}}>
          <h3 style={{color:'black', backgroundColor:'white', padding:'5px', borderRadius:'2px'}}>Shoes</h3>
          <a href="#">Sports</a>
          <a href="#">Casual</a>
          <a href="#">Leather</a>
        </div>
      </div>
    </div>
  </div> 


  <div class="header-right">
    <a href="#about"><img src="heart.png" alt="heart" height={"20px"} /></a>
    <a href="#about"><img src="support.png" alt="heart" height={"20px"} /></a>
    <a href="#about"><img src="user.png" alt="heart" height={"20px"} /></a>
    
  </div>
</div>
    )
}

export default Navbar;