import React from "react";

interface Props {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Education = ({ change }: Props) => {
  return (
    <div className="education-box">
      <p>Education</p>
      <div>
        <input name="college" type="text" placeholder="College" onChange={change} />
        <input name="major" type="text" placeholder="Major" onChange={change} />
        <input name="graduation" type="text" placeholder="Graducation Date" onChange={change} />
        <input name="gpa" type="text" placeholder="GPA" onChange={change} />
      </div>
    </div>
  );
};

export default Education;
