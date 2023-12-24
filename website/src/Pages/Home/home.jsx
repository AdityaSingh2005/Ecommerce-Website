import React from "react";
import './home.css';
import Header from "./carousel";
import Cards from "./cards";
import Contact from "./contact";
import Category from "./categories";

const Home = () => {
    return(
        <div>
         <Header/>
         <Cards/>
         <Category/>
         <Contact/>
        </div>
    )
}

export default Home;