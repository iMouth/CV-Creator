import React, { Component } from "react";
import uniqid from "uniqid";
import ProjectItems from "./ProjectItems";
class Projects extends Component {
  constructor() {
    super();

    this.state = {
      project: [],
    };
    this.delete = this.delete.bind(this);
  }

  delete(task) {
    this.setState((prevState) => ({
      project: prevState.project.filter((el) => el !== task),
    }));
  }

  onAddItem = (e) => {
    const item = {
      id: uniqid(),
    };
    this.setState({
      project: this.state.project.concat(item),
    });
  };

  render() {
    const { project } = this.state;

    return (
      <div>
        <p>Projects</p>
        <ProjectItems del={this.delete} project={project}></ProjectItems>
        <button type="button" onClick={this.onAddItem}>
          Add
        </button>
      </div>
    );
  }
}

export default Projects;
