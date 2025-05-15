import React from "react";
import "./FirstSection.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import leftImage from "./first-ection-left.png";

const FirstSection = () => {
  return (
    <div className="first">
      <div className="first-main container">
        <div className="first-text">
          <h1>
            Your <span>Apex </span> Awaits – Start Climbing.
          </h1>
          <h3>
            Empowering students with a centralized platform for high-quality
            resources and community support.
          </h3>
          <button className="button"><Link className="buttonp" to={"/Login"}>
              <p>Get started <FaArrowRight/></p> 
            </Link></button>
            
        
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
