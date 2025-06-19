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
    finalYear: "Final Year",
    backgroundImage: DefaultBg,
    pdfUrl: "/Pdf/CSC 403/(Global Edition) Ian Sommerville - Software Engineering, 10th Edition-Pearson (2016).pdf"
    
  },
  {
    id: 2,
    title: "Computer Networks and Communications",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: Defaultbgg,
    pdfUrl: "/Pdf/CSC 411/CSC 411-Artificial Intelligence.pdf"
  },
  {
    id: 3,
    title: "Human Computer Interaction",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg3,
    pdfUrl: "/Pdf/CSC 421/HCI_course_material.pdf"
  },
  {
    id: 4,
    title: "Organization of Programming Language",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg4,
    pdfUrl: "/Pdf/CSC 441/OPL_course_material.pdf"
  },
  {
    id: 5,
    title: "Software Engineering",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg6,
    pdfUrl: "/Pdf/CSC 441/SE_course_material.pdf" // Assuming same folder as OPL
  },
  {
    id: 6,
    title: "Net‑centric Computing",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg5,
    pdfUrl: "/Pdf/CSC 411/NC_course_material.pdf" // Assuming same folder as Networks
  },
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
