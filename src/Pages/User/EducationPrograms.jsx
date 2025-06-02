import { useState } from "react";
import ProgramCard from './ProgramCard';
import DefaultBg from './images/AI.png';
import Defaultbgg from './images/NCC.png';
import DefaultBg3 from './images/HCI (1).png';
import DefaultBg4 from './images/cnc.jpeg';
import DefaultBg5 from "./images/Netcentric.jpg";
import DefaultBg6 from './images/sfteng.png';
import "./EducationPrograms.css";
import Footer from "./Footer.jsx";

const EducationPrograms = () => {
  const [programs] = useState([
    {
      id: 1,
      title: "Artificial Intelligence",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: DefaultBg,
      category: "Executive Education",
      
    },
    {
      id: 2,
      title: "Computer Networks and Communications",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: Defaultbgg,
      category: "Executive Education",
    },
    {
      id: 3,
      title: "Human Conputer Interaction",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: DefaultBg3,
      category: "Executive Education",
    },
    {
      id: 4,
      title: "Organization of programming language",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: DefaultBg4,
      category: "Executive Education",
    },
     {
      id: 5,
      title: "Software Engineering",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: DefaultBg6,
      category: "Executive Education",
    },
    {
      id: 6,
      title: "Net-centric Computing",
      institution: "Dominion University",
      finalYear: 'Final Year',
      backgroundImage: DefaultBg5,
      category: "Executive Education",
    },
    // {
    //   id: 7,
    //   title: "Human Conputer Interaction",
    //   institution: "Dominion University",
    //   finalYear: 'Final Year', 
    //   backgroundImage: DefaultBg3,
    //   category: "Executive Education",
    // },
    // {
    //   id: 8,
    //   title: "Organization of programming language",
    //   institution: "Dominion University",
    //   finalYear: 'Final Year',
    //   backgroundImage: DefaultBg4,
    //   category: "Executive Education",
    // },
  ]);

  return (
    <div className="programs-container">
      <div className="programs-grid">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      
       <Footer/>
    </div>
  );
};

export default EducationPrograms;
