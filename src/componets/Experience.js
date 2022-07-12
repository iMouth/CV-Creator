import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceItems from "./ExperienceItems";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experience: [],
    };
    this.delete = this.delete.bind(this);
  }

  delete(task) {
    this.setState((prevState) => ({
      experience: prevState.experience.filter((el) => el !== task),
    }));
  }

  onAddItem = (e) => {
    const item = {
      id: uniqid(),
    };
    this.setState({
      experience: this.state.experience.concat(item),
    });
  };

  render() {
    const { experience } = this.state;

    return (
      <div>
        <p>Professional Experience</p>
        <ExperienceItems del={this.delete} experience={experience}></ExperienceItems>
        <button type="button" onClick={this.onAddItem}>
          Add
        </button>
      </div>
    );
  }
}

export default Experience;
