import "./Career.css";

function Career() {
  return (
    <section className="career-section">
      <div className="containerr">
        <h2 className="section-title">
          Nurture your career path for <span>long-term </span> success
        </h2>

        <div className="benefits-grid">
          {/* Explore new skills */}
          <div className="benefit-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="benefit-title">Explore new skills</h3>
            <p className="benefit-description">
              Access 100+ courses in AI, business, technology, and more.
            </p>
          </div>

          {/* Earn valuable credentials */}
          <div className="benefit-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  d="M12 15l-2 5l9-9l-9-9l2 5l-7 4l7 4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="4"
                  y="7"
                  width="16"
                  height="10"
                  rx="1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Earn valuable credentials</h3>
            <p className="benefit-description">
              Get certificates for every course you finish and boost your
              chances of getting hired after your trial ends at no additional
              cost.
            </p>
          </div>

          {/* Learn from the best */}
          <div className="benefit-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Learn from the best</h3>
            <p className="benefit-description">
              Take your skills to the next level with expert-led courses and
              Coursera Coach, your AI-powered guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
