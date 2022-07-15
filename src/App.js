import "./App.css";
import React, { Component } from "react";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import PersonalDetails from "./componets/PersonalDetails";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Preview from "./componets/Preview";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "John Doe",

      email: "johndoe@gmail.com",
      website: "www.johndoe.com",
      linkedin: "lindin.com/ln/johndoe",
      github: "github.com/johndoe",
      college: "Univerisity of California",
      major: "BS Computer Science",
      graduation: "Aug 2019 - May 2023",
      gpa: "3.65",
      languages: "Java, Python, Javasript/HTML/CSS, Bash, SQL",
      tools: "Node.js, React, Expres.js",
      frameworks: "Github/Git, Intelliji, AWS, Docker",
      project: [],
      experience: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddProject = this.onAddProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.handleChangeArrayProject = this.handleChangeArrayProject.bind(this);
    this.onAddExperience = this.onAddExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.handleChangeArrayExperience = this.handleChangeArrayExperience.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleChangeArrayProject = (e, proj) => {
    const projects = this.state.project;
    const index = projects.indexOf(proj);
    const name = e.target.name;
    projects[index][name] = e.target.value;
    this.setState({
      ...this.state,
      project: projects,
    });
  };

  deleteProject(item) {
    this.setState((prevState) => ({
      project: prevState.project.filter((el) => el !== item),
    }));
  }

  onAddProject = (e) => {
    const item = {
      id: uniqid(),
      title: "",
      link: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
    };
    this.setState({
      project: this.state.project.concat(item),
    });
  };

  deleteExperience(item) {
    this.setState((prevState) => ({
      experience: prevState.experience.filter((el) => el !== item),
    }));
  }

  onAddExperience = (e) => {
    const item = {
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      date: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
    };
    this.setState({
      experience: this.state.experience.concat(item),
    });
  };

  handleChangeArrayExperience = (e, exp) => {
    const experience = this.state.experience;
    const index = experience.indexOf(exp);
    const name = e.target.name;
    experience[index][name] = e.target.value;
    this.setState({
      ...this.state,
      experience: experience,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content-box">
          <PersonalDetails change={this.handleChange} />
          <Education change={this.handleChange} />
          <Experience
            add={this.onAddExperience}
            change={this.handleChangeArrayExperience}
            del={this.deleteExperience}
            experience={this.state.experience}
          />
          <Projects
            add={this.onAddProject}
            change={this.handleChangeArrayProject}
            del={this.deleteProject}
            project={this.state.project}
          />
          <Skills change={this.handleChange} />
        </div>
        <Preview state={this.state} />
      </div>
    );
  }
}

export default App;
