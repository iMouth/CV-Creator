import "./App.css";
import React, { useState } from "react";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import PersonalDetails from "./componets/PersonalDetails";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Preview from "./componets/Preview";
import uniqid from "uniqid";

const App = () => {
  const info = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "johndoe@gmail.com",
    website: "www.johndoe.com",
    linkedin: "lindin.com/ln/johndoe",
    github: "github.com/johndoe",
    college: "Univerisity of California",
    major: "BS Computer Science",
    graduation: "Aug 2019 - May 2023",
    gpa: "3.65",
    languages: "Java, Python, Javasript/HTML/CSS, Bash, SQL",
    tools: "Node.js, React, Express.js",
    frameworks: "Github/Git, Intelliji, AWS, Docker",
    project: [],
    experience: [],
  };
  const [state, setState] = useState(info);

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const getNewProject = () => {
    return {
      id: uniqid(),
      title: "",
      link: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
    };
  };

  const onAddProject = (e) => {
    setState({ ...state, project: state.project.concat(getNewProject()) });
  };

  const deleteProject = (item) =>
    setState((prevState) => ({ ...state, project: prevState.project.filter((el) => el !== item) }));

  const handleChangeArrayProject = (e, proj) => {
    const projects = state.project;
    const index = projects.indexOf(proj);
    const name = e.target.name;
    projects[index][name] = e.target.value;
    setState({
      ...state,
      project: projects,
    });
  };

  const getNewExperience = () => {
    return {
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
  };

  const onAddExperience = (e) => {
    setState({ ...state, experience: state.experience.concat(getNewExperience()) });
  };

  const deleteExperience = (item) =>
    setState((prevState) => ({ ...state, experience: prevState.experience.filter((el) => el !== item) }));

  const handleChangeArrayExperience = (e, exp) => {
    const experience = state.experience;
    const index = experience.indexOf(exp);
    experience[index][e.target.name] = e.target.value;
    setState({ ...state, experience: experience });
  };

  return (
    <div className="App">
      <div className="content-box">
        <PersonalDetails change={handleChange} />
        <Education change={handleChange} />
        <Experience
          add={onAddExperience}
          change={handleChangeArrayExperience}
          del={deleteExperience}
          experience={state.experience}
        />
        <Projects add={onAddProject} change={handleChangeArrayProject} del={deleteProject} project={state.project} />
        <Skills change={handleChange} />
      </div>
      <Preview state={state} />
    </div>
  );
};

export default App;
