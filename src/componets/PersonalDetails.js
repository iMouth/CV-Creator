import React, { Component } from "react";


class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      website: "",
      linkedin: "",
      github: "",
    };
  }
  render() {
    return (
      <div className="personal-box">
        <p>Personal Details</p>
        <div className="personal">
          <input id="name" type="text" placeholder="Name" />
          <input id="phone" type="tel" placeholder="Phone Number" />
          <input id="email" type="email" placeholder="Email Address" />
          <input id="website" type="url" placeholder="Personal Website" />
          <input id="linkedin" type="url" placeholder="Linkedin" />
          <input id="github" type="url" placeholder="GitHub Link" />
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
