import { useState } from "react";
import ProgramCard from '../ProgramCard';
import DefaultBg from './download.jpeg';
import Defaultbgg from './modern-man-working-caffe.jpg';
import DefaultBg3 from './download.png';
import DefaultBg4 from './images.png';
import DefaultBg5 from "./xpert system.jpeg";
import DefaultBg6 from './SOFTWARE ENGINEERING SECURITY.jpeg';
import "./SenEduPrograms.css";
import Footer from "../Footer.jsx";

const SenEduPrograms = () => {
const [programs] = useState([
  {
    id: 1,
    title: "SOFTWARE ENGINEERING MANAGEMENT",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg4,
    pdfUrl: "/Pdf/CSC 403/(Global Edition) Ian Sommerville - Software Engineering, 10th Edition-Pearson (2016).pdf"
  },
  {
    id: 2,
    title: "SOFTWARE PROJECT MANAGEMENT",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: Defaultbgg,
    pdfUrl: "/Pdf/CSC 411/CSC 411-Artificial Intelligence.pdf"
  },
  {
    id: 3,
    title: "RESEARCH METHODOLOGY",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg3,
    pdfUrl: "/Pdf/CSC 421/HCI_course_material.pdf"
  },
  {
    id: 4,
    title: "SOFTWARE ENGINEERING PROFESSIONAL",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg,
    pdfUrl: "/Pdf/CSC 441/OPL_course_material.pdf"
  },
  {
    id: 5,
    title: "AI AND EXPERT SYSTEM",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg5,
    pdfUrl: "/Pdf/CSC 441/SE_course_material.pdf" // Assuming same folder as OPL
  },
  {
    id: 6,
    title: "SOFTWARE ENGINEERING SECURITY",
    institution: "Dominion University",
    finalYear: "Final Year",
    backgroundImage: DefaultBg6,
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

export default SenEduPrograms;
