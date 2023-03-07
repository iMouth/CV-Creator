import React from "react";
import { ProjectIF } from "./types";

interface Props {
  project: ProjectIF[];
  del: (index: ProjectIF) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, index: ProjectIF) => void;
}

const ProjectItems = ({ project, del, change }: Props) => {
  const experienceList = project.map((proj) => (
    <div key={proj.id}>
      <input
        name="title"
        type="text"
        placeholder="Project Title"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="link"
        type="text"
        placeholder="Link"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="desc1"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="desc2"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="desc3"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="desc4"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <input
        name="desc5"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, proj);
        }}
      />
      <button value="Hello" type="button" onClick={() => del(proj)}>
        Delete
      </button>
    </div>
  ));
  return <div className="project-box">{experienceList}</div>;
};

export default ProjectItems;
