import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';


const Category = () => {
    return(
        <div className="category" id="category">
            <div className="category-head">
          <h1 className="category-heading">Categories</h1>
          </div>
          <div className="card-contents">
      <div className="carding">
      <Link to='./man'>    <img src="man.png" alt="Card 1" className="card-img" /></Link>
      </div>
      <div className="carding">
      <Link to='./women'>   <img src="femaile.png" alt="Card 2" className="card-img" /></Link>
      </div>
      <div className="carding">
      <Link to='./shoe'>  <img src="shoe.png" alt="Card 3" className="card-img" /></Link>
      </div>
      <div className="carding">
        <Link to='./jwelery'><img src="watch.png" alt="Card 4" className="card-img" /></Link>
      </div>
    </div>
        </div>
    )
}

export default Category;