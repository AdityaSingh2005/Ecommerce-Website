import React from "react";
import './home.css';
import Header from "./carousel";
import Cards from "./cards";
import Contact from "./contact";


const Home = () => {
    return(
        <div>
         <Header/>
         <Cards/>
         <Contact/>
        </div>
    )
}

export default Home;