import React from "react";
import "./Footer.css";
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import medium from "./images/medium.png"
const Footer = () => {
  return (
    <div className="footer">
      <section id="footer-two">
        <div id="footer-two-cnt">
          <div id="footer-two-cnt-e">
            <h4>Contact</h4>
            <a href="#m" id="cnt2">
              help@scholarApex.com
            </a>
            <br />
          <div className="socials">
          <a href="https://www.facebook.com/" className="social" target="blank" >
                <img src={facebook} alt="" />
            </a>
            
            <a href="https://joinkuda.medium.com/" className="social" target="blank" >
                <img src={medium} alt="" />
            </a>
            <a href="https://www.instagram.com/" className="social" target="blank" >
                <img src={instagram} alt="" />
            </a>
          </div>
          </div>
          <div id="footer-two-cnt-a">
            <h4>Address</h4>
            <p>Lagos - Ibadan Expy, Olonde/Aba-Nla 110108, Oyo</p>
          </div>
          {/* <div id="footer-two-cnt-b">
            <h4>London</h4>
            <p>5 New Street Square, London, EC4A 3TW, United Kingdom</p>
          </div>
          <div id="footer-two-cnt-c">
            <h4>Cape Town</h4>
            <p>
              146 Campground Road, Snakepit Building, Level 4, Newlands, Cape
              Town
            </p>
          </div> */}
        </div>
        <p className="footermain">
        copyright @ 2025 by <span>mike devx</span> | all rights reserved!
      </p>
      </section>
    
    </div>
  );
};

export default Footer;
