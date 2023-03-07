import React from "react";

interface Props {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Skills = ({ change }: Props) => {
  return (
    <div className="skills-box">
      <p>Skills</p>
      <div>
        <input name="languages" type="text" placeholder="Languages" onChange={change} />
        <input name="frameworks" type="text" placeholder="Frameworks" onChange={change} />
        <input name="tools" type="text" placeholder="Tools" onChange={change} />
      </div>
    </div>
  );
};

export default Skills;
