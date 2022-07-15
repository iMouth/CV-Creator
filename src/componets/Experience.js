import React from "react";
import ExperienceItems from "./ExperienceItems";

const Experience = (props) => {
  const { experience, del, change, add } = props;
  return (
    <div>
      <p>Professional Experience</p>
      <ExperienceItems del={del} experience={experience} change={change}></ExperienceItems>
      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default Experience;
