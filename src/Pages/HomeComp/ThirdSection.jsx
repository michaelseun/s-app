import React from "react";
import './ThirdSection.css'
import aboutimg from './about-img.jpg';
const ThirdSection = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div>
          <img className="about-img" src={aboutimg} alt="about" />
        </div>
      </div>
      <div className="about-right ">
        <h3>Your apex awaits—start climbing!</h3>
        <p>
          ScholarApex is a <b>student-focused</b> platform designed to simplify
          access to quality learning resources.it centralizes articles, video
          tutorials, and interactive modules to <b>support academic</b> and
          personal growth. We believe learning should be{" "}
          <b>
            <i> accessible</i>
          </b>
          ,
          <b>
            <i>inspiring</i>
          </b>
          , and
          <b>
            <i> empowering </i>
          </b>
          for all students. Whether exploring new topics or excelling in
          studies, our platform makes discovery effortless. Turn challenges into
          opportunities with ScholarApex. Your apex awaits—start climbing!
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
