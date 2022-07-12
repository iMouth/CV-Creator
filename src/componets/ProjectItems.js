import React from "react";

const ProjectItems = ({ project, del }) => {
  const experienceList = project.map((proj) => (
    <div>
      <input type="text" placeholder="Project Title" />
      <input type="text" placeholder="Link" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <button value="Hello" type="button" onClick={() => del(proj)}>
        Delete
      </button>
    </div>
  ));
  return <div className="project-box">{experienceList}</div>;
};

export default ProjectItems;
