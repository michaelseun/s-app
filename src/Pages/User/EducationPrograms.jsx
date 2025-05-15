import { useState } from "react"
import ProgramCard from './ProgramCard';
import "./EducationPrograms.css"

const EducationPrograms = () => {
  const [programs] = useState([
    {
      id: 1,
      title: "Artificial Intelligence Programme",
      institution: "OxfordX",
      backgroundImage: "../User/images/AI.png",
      logo: "./images/AI.png",
      category: "Executive Education",
    },
    {
      id: 2,
      title: "MBA Essentials",
      institution: "LSE",
      backgroundImage: "../User/images/AI.png",
      logo: "https://via.placeholder.com/120x50",
      category: "Executive Education",
    },
    {
      id: 3,
      title: "Artificial Intelligence: Implications for Business Strategy",
      institution: "MITx",
      backgroundImage: "../User/images/AI.png",
      logo: "./images/AI.png",
      category: "Executive Education",
    },
    {
      id: 4,
      title: "Executive Leadership Programme",
      institution: "OxfordX",
      backgroundImage: "../User/images/AI.png",
      logo: "./images/AI.png",
      category: "Executive Education",
    },
  ])

  return (
    <div className="programs-container">
      <div className="programs-grid">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}

export default EducationPrograms
