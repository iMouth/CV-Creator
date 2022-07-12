import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      college: "",
      major: "",
      graduation: "",
      gpa: "",
      location: "",
    };
  }

  render() {
    return (
      <div className="education-box">
        <p>Education</p>
        <div>
          <input id="college" type="text" placeholder="College" />
          <input id="major" type="text" placeholder="Major" />
          <input id="graduation" type="text" placeholder="Graducation Date" />
          <input id="gpa" type="text" placeholder="GPA" />
          <input id="location" type="text" placeholder="Location" />
        </div>
      </div>
    );
  }
}

export default Education;
