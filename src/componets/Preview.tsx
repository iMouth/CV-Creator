import React from "react";
import "../styles/style.css";
import { InfoIF } from "./types";

interface Props {
  state: InfoIF;
}

const Preview = (props: Props) => {
  const text = props.state;
  const projects = text.project.map((project) => {
    return (
      <div key={project.id}>
        <div className="project">
          <p className="project-name">{project.title}</p>
          <span>|</span>
          <a href="#" className="project-link">
            {project.link}
          </a>
        </div>
        <div className="project-list">
          <ul>
            <li>{project.desc1}</li>
            <li>{project.desc2}</li>
            <li>{project.desc3}</li>
            <li>{project.desc4}</li>
            <li>{project.desc5}</li>
          </ul>
        </div>
      </div>
    );
  });

  const projectCheck = () => {
    if (projects.length !== 0) {
      return (
        <div className="project-info">
          <h1>Projects</h1>
          {projects}
        </div>
      );
    }
  };

  const experiences = text.experience.map((exp) => {
    return (
      <div key={exp.id}>
        <div className="experience-info">
          <p className="experience-name">{exp.position}</p>
          <span>|</span>
          <p className="experience-place">{exp.company}</p>
          <span>|</span>
          <p className="experience-location">{exp.location}</p>
          <p className="experience-date">{exp.date}</p>
        </div>
        <div className="experience-list">
          <ul>
            <li>{exp.desc1}</li>
            <li>{exp.desc2}</li>
            <li>{exp.desc3}</li>
            <li>{exp.desc4}</li>
            <li>{exp.desc5}</li>
          </ul>
        </div>
      </div>
    );
  });

  const experienceCheck = () => {
    if (text.experience.length !== 0) {
      return (
        <div className="professional-info">
          <h1>Professional Experience</h1>
          {experiences}
        </div>
      );
    }
  };

  const skillsCheck = () => {
    const languages = text.languages.length !== 0 ? <p className="tech-lang">Languages: {text.languages}</p> : null;
    const frameworks =
      text.frameworks.length !== 0 ? <p className="tech-frame">Frameworks: {text.frameworks}</p> : null;
    const tools = text.tools.length !== 0 ? <p className="tech-tools">Tools: {text.tools}</p> : null;
    return (
      <div className="tech-skills">
        <h1>Skills</h1>
        {languages}
        {frameworks}
        {tools}
      </div>
    );
  };

  const educationCheck = () => {
    if (text.college.length !== 0 || text.major.length !== 0 || text.graduation.length !== 0 || text.gpa.length !== 0) {
      return (
        <div className="education-info">
          <h1>Education</h1>
          <div className="education">
            <div className="univeristy-info">
              <p id="university-name">{text.college}</p>
              <p id="univeristy-dates">{text.graduation}</p>
            </div>
            <div className="major-info">
              <p id="major-degree">{text.major}</p>
              <span>|</span>
              <p id="GPA">GPA: {text.gpa}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  const personalCheck = () => {
    if (
      text.name.length !== 0 ||
      text.phone.length !== 0 ||
      text.email.length !== 0 ||
      text.website.length !== 0 ||
      text.linkedin.length !== 0 ||
      text.github.length !== 0
    ) {
      return (
        <div className="personal-info">
          <div className="personal-contact">
            <div className="name">
              <p>{text.name}</p>
            </div>
            <div className="contact">
              <a href="mailto:kelvinkamau1130@yahoo.com">{text.email}</a>
              <span>|</span>
              <p>{text.phone}</p>
            </div>
          </div>
          <div className="personal-links">
            <a href="#">Personal site: {text.website}</a>
            <a href="#">Linkdin: {text.linkedin}</a>
            <a href="#">Github: {text.github}</a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="wrapper">
      {personalCheck()}
      {educationCheck()}
      {experienceCheck()}
      {projectCheck()}
      {skillsCheck()}
    </div>
  );
};

export default Preview;
