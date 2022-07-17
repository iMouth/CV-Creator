import React from "react";
import "../styles/test.css";

const Preview = (props) => {
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

  return (
    <div className="wrapper">
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
      <div className="professional-info">
        <h1>Professional Experience</h1>
        {experiences}
      </div>
      <div className="project-info">
        <h1>Projects</h1>
        {projects}
      </div>
      <div className="tech-skills">
        <h1>Skills</h1>
        <p className="tech-lang">Languages: {text.languages}</p>
        <p className="tech-frame">Frameworks: {text.frameworks}</p>
        <p className="tech-tools">Tools: {text.tools}</p>
      </div>
    </div>
  );
};

export default Preview;
