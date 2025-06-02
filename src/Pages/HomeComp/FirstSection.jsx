import React from "react";
import "./FirstSection.css";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div className="first">
      <div className="first-main">
        <div className="first-text">
          <h1>
            Your <span>Apex</span> Awaits – Start Climbing.
          </h1>
          <h3>
            Empowering students with a centralized platform for high-quality
            resources and community support.
          </h3>
          
            <Link className="button" to="/Login">
              Get started <span className="arrow">→</span>
            </Link>
           
          
        </div>
      </div>
    </div>
  );
};

export default FirstSection;