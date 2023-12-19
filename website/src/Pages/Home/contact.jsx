import React from "react";
import "./home.css";

const Contact = () => {    
    return (
       <div className="contactPage">
             <div id="contact">
               <h1 className="contactPageTitle">Contact Us</h1>

               <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea name="message" rows="5" className="msg" placeholder="Your Message" />

                <button type="submit" value="send" className="submitBtn">Submit</button>
               </form>

             </div>
        </div>
    )
}

export default Contact;