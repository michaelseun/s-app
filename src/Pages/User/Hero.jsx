import "./Hero.css";
import heroImage from "./heroimage.jpg";
import Footer from "./Footer.jsx";
import Career from "./Career.jsx";
import Faq from "./Faq.jsx";

const Hero = () => {
  return (
    <section className="hero-sectionn ">
     <div className="hero-section">
     <div className="hero-content container">
        <p className="hero-tagline">Elevate Your Learning. Excel Your Future.</p>
        <h1 className="hero-title">
          Your <span className="highlight">Apex</span> Awaits – Start Climbing.
        </h1>
        <p className="hero-description">
          Welcome to Scholar<span>Apex</span>—your launchpad for academic excellence and
          professional growth. Built by university students, for university
          students, Scholar Apex is more than a learning platform; it’s a
          thriving community where ambition meets action
        </p>
      </div>

      <div className="hero-image-container">
        <img
          src={heroImage || "/placeholder.svg"}
          alt="student using a laptop"
          className="hero-image"
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
      <Career/>
      <Faq/>
      <Footer/>
    </section>
    

    
  );
};

export default Hero;
