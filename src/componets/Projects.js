import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = (props) => {
  const { project, del, change, add } = props;
  return (
    <div>
      <p>Projects</p>
      <ProjectItems del={del} project={project} change={change}></ProjectItems>
      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default Projects;
