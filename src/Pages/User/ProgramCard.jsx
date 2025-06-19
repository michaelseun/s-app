import React from 'react';
import DefaultBg from './images/AI.png';
import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  const backgroundSrc = program.backgroundImage || DefaultBg;

  // Download handler (encodes spaces, extracts filename)
  const handleDownload = () => {
    const encodedUrl = program.pdfUrl.replace(/ /g, '%20');
    const link = document.createElement('a');
    link.href = encodedUrl;
    link.download = program.pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="card-buttons">
          {/* View in new tab */}
          <a
            href={program.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn view-btn"
          >
            View PDF
          </a>
          {/* Download */}
          <button onClick={handleDownload} className="btn download-btn">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
