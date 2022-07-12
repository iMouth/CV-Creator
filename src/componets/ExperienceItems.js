import React from "react";

const ExperienceItems = ({ experience, del }) => {
  const experienceList = experience.map((exp) => (
    <div>
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="Position" />
      <input type="text" placeholder="Date" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Description" />
      <button value="Hello" type="button" onClick={() => del(exp)}>
        Delete
      </button>
    </div>
  ));
  return <div className="experience-box">{experienceList}</div>;
};

export default ExperienceItems;
