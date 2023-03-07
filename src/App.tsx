import "./App.css";
import React, { useState } from "react";
import Education from "./componets/Education";
import Experience from "./componets/Experience";
import PersonalDetails from "./componets/PersonalDetails";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Preview from "./componets/Preview";
import { ProjectIF, ExperienceIF } from "./componets/types";
import { info } from "./componets/info";
import uniqid from "uniqid";

const App = () => {
  const [state, setState] = useState(info);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const getNewProject = (): ProjectIF => {
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

  const onAddProject = () => {
    setState({ ...state, project: state.project.concat(getNewProject()) });
  };

  const deleteProject = (item: ProjectIF) => {
    setState((prevState) => ({ ...state, project: prevState.project.filter((el) => el !== item) }));
  };

  const handleChangeArrayProject = (e: React.ChangeEvent<HTMLInputElement>, proj: ProjectIF) => {
    const projects: any = state.project;
    const index = projects.indexOf(proj);
    const name = e.target.name;
    projects[index][name] = e.target.value;
    setState({
      ...state,
      project: projects,
    });
  };

  const getNewExperience = (): ExperienceIF => {
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

  const onAddExperience = () => {
    setState({ ...state, experience: state.experience.concat(getNewExperience()) });
  };

  const deleteExperience = (item: ExperienceIF) =>
    setState((prevState) => ({ ...state, experience: prevState.experience.filter((el) => el !== item) }));

  const handleChangeArrayExperience = (e: React.ChangeEvent<HTMLInputElement>, exp: ExperienceIF) => {
    const experience: any = state.experience;
    const index = experience.indexOf(exp);
    const name = e.target.name;
    experience[index][name] = e.target.value;
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
