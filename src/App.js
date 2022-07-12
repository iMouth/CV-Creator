import "./App.css";
import React from "react";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import PersonalDetails from "./componets/PersonalDetails";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";

function App() {
  return (
    <div className="App">
      <div className="content-box">
        <PersonalDetails />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
