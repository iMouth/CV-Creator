import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [],
      tools: [],
      tech: [],
    };
  }

  render() {
    return (
      <div className="skills-box">
        <p>Skills</p>
        <div>
          <input type="text" placeholder="Languages" />
          <input type="text" placeholder="Frameworks" />
          <input type="text" placeholder="Tools" />
        </div>
      </div>
    );
  }
}

export default Skills;
