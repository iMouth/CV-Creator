import React from "react";
import { ExperienceIF } from "./types";

interface Props {
  experience: ExperienceIF[];
  del: (index: ExperienceIF) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, index: ExperienceIF) => void;
}

const ExperienceItems = ({ experience, del, change }: Props) => {
  const experienceList = experience.map((exp) => (
    <div key={exp.id}>
      <input
        name="position"
        type="text"
        placeholder="Position"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="company"
        type="text"
        placeholder="Company"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="location"
        type="text"
        placeholder="location"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="date"
        type="text"
        placeholder="Date"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="desc1"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="desc2"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="desc3"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="desc4"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <input
        name="desc5"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          change(e, exp);
        }}
      />
      <button type="button" onClick={() => del(exp)}>
        Delete
      </button>
    </div>
  ));
  return <div className="experience-box">{experienceList}</div>;
};

export default ExperienceItems;
