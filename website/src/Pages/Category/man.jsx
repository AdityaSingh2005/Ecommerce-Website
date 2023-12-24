import React from "react";
import "./category.css";


const Man = () => {
        const products = [
          { id: 1, name: 'Product 1', price: 25.99, image: 'image1.jpg' },
          { id: 2, name: 'Product 2', price: 19.99, image: 'image2.jpg' },
          { id: 3, name: 'Product 3', price: 34.99, image: 'image3.jpg' },
          { id: 4, name: 'Product 4', price: 29.99, image: 'image4.jpg' },
        ];
    return(
        <div className="mens-section">
      {products.map((product) => (
        <div key={product.id} className="holder">
          <img src="man1.webp" alt='man1' className="holder-image" />
          <div className="holder-content">
            <h3 className="holder-title">Gray T Shirt</h3>
            <p className="holder-price">$1500</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Man;