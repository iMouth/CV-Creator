import React from "react";
import ExperienceItems from "./ExperienceItems";
import { ExperienceIF } from "./types";

interface Props {
  experience: ExperienceIF[];
  del: (index: ExperienceIF) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, index: ExperienceIF) => void
  add: () => void;
}

const Experience = (props: Props) => {
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
