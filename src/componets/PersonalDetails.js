import React from "react";

const PersonalDetails = ({ change }) => {
  return (
    <div className="personal-box">
      <p>Personal Details</p>
      <div className="personal">
        <input name="name" type="text" placeholder="Name" onChange={change} />
        <input name="phone" type="tel" placeholder="Phone Number" onChange={change} />
        <input name="email" type="email" placeholder="Email Address" onChange={change} />
        <input name="website" type="url" placeholder="Personal Website" onChange={change} />
        <input name="linkedin" type="url" placeholder="Linkedin" onChange={change} />
        <input name="github" type="url" placeholder="GitHub Link" onChange={change} />
      </div>
    </div>
  );
};

export default PersonalDetails;
