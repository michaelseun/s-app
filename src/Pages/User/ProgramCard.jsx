import React from 'react';
import DefaultBg from './images/AI.png';
import DefaultLogo from './images/AI.png';
import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  const backgroundSrc = program.backgroundImage || DefaultBg;
  // const logoSrc       = program.logo            || DefaultLogo;

  return (
    <div className="program-card">
      <div className="card-image-container">
        <img
          src={backgroundSrc}
          alt={program.title}
          className="card-background-image"
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{program.title}</h3>
        <p className="card-institution">{program.institution}</p>
        <p className="card-finalYear">{program.finalYear}</p>
        <div className="card-category-container">
          <span className="card-category">{program.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
