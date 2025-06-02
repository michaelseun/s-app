import React from "react";
import "./ThirdSection.css";
import aboutimg from "./about-img.jpg";
const ThirdSection = () => {
  return (
    <section className="about-sectionn ">
      <div className="about-section">
        <div className="about-content container">
          <p className="about-tagline">
            Elevate Your Learning. Excel Your Future.
          </p>
          <h1 className="about-title">
            Your <span className="highlight">Apex</span> Awaits – Start
            Climbing.
          </h1>
          <p className="about-description">
            ScholarApex is a <b>student-focused</b> platform designed to
            simplify access to quality learning resources.it centralizes
            articles, video tutorials, and interactive modules to
            <b>support academic</b> and personal growth. We believe learning
            should be
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
            studies, our platform makes discovery effortless. Turn challenges
            into opportunities with ScholarApex. Your apex awaits—start
            climbing!
          </p>
        </div>

        <div className="about-image-container">
          <img
            src={aboutimg || "aboutimg"}
            alt="student using a laptop"
            className="about-image"
          />

          <div className="feature-box student-focused">
            <span className="feature-text">student-focused</span>
          </div>

          <div className="feature-box empowering">
            <span className="feature-text">empowering</span>
          </div>

          <div className="feature-box /ccessible">
            <span className="feature-text">accessible</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
