import React from "react";
import Skills from "./Skills.jsx";
import Introduccion from "./Introduccion.jsx";
import Projects from "./Projects.jsx";
import NavBarPortfolio from "../src/NavbarPortfolio.jsx";
import "./styles/Portfolio.css";

function SinglePagePortfolio() {
  return (
    <div className="containerPortfolio">
      <NavBarPortfolio />
      <div>
        <Introduccion />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default SinglePagePortfolio;
