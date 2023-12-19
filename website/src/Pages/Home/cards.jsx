import React from "react";
import "./home.css"

const Cards = () => {
    return(
        <div class="card-container">
        <div class="card">
          <div class="card-content">
            <h2>Chic Classics</h2>
            <p>Elevate your everyday style with timeless essentials that seamlessly blend comfort and fashion.</p>
          </div>
        </div>
    
        <div class="card">
          <div class="card-content">
            <h2>Runway Ready</h2>
            <p>Unleash your inner fashionista with our latest runway-inspired collection – stay ahead of the trends!</p>
          </div>
        </div>
    
        <div class="card">
          <div class="card-content">
            <h2>Casual Elegance</h2>
            <p>Effortlessly stylish and comfortable – discover the perfect balance of laid-back charm and sophistication.</p>
          </div>
        </div>
      </div>
    )
}
export default Cards;