import "./ProgramCard.css"

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <div className="card-image-container">
        <img
          src={program.backgroundImage || "./images/AI.png"}
          alt={program.title}
          className="card-background-image"
        />
        <div className="card-logo-container">
          <img src={program.logo || "./images/AI.png"} alt={`${program.institution} logo`} className="card-logo" />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{program.title}</h3>
        <p className="card-institution">{program.institution}</p>
        <div className="card-category-container">
          <span className="card-category">{program.category}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
