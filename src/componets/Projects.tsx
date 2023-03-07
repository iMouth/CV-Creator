import React from "react";
import ProjectItems from "./ProjectItems";
import { ProjectIF } from "./types";

interface Props {
  project: ProjectIF[];
  del: (index: ProjectIF) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, index: ProjectIF) => void;
  add: () => void;
}

const Projects = (props: Props) => {
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
