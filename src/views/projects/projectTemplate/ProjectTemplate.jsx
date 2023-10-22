import {Routes, Route, useLocation, Link } from "react-router-dom";
import './ProjectTemplate.scss';
import HeaderProject from "../../../components/Headers/HeaderProject";
import { useEffect, useState } from "react";
import { PROJECTS } from "../../../../public/projects";
import ArrowUpRight from "../../../components/Arrows/ArrowUpRight";
import NavbarProjects from "../../../components/navbars/NavbarProjects/NavbarProjects";

export default function ProjectTemplate() {
  let projects = PROJECTS;

  // MANAGING PROJECT SETTER
  // Current project
  let [currentProject, setCurrentProject] = useState();

  console.log(currentProject);

  // // Setting current project
  const projectSetter = (project) => {
    setCurrentProject(project);
  }

  // // Checking location
  const location = useLocation();

  // // Matching project
  const locationSetter = (pathname) => {
    const projectPath = pathname;
    const project = projects.find( project => projectPath === `/work/project${project.path}`);
    project ? projectSetter(project) : '';
  }

  //  Updating location

  useEffect(() => {
    locationSetter(location.pathname);
  },[location]);

  return <section className={`project`}>
    <HeaderProject projectTitle={currentProject?.title} projectColor={currentProject?.mainColor}/>

    <main className="project__main">
      <Routes>
          {projects.map(el => {
            return <Route 
              key = {el.index}
              title = {el.title}
              path = {el.path}
              maincolor = {el.mainColor}
              link = {el.link}
              element = {<el.component />}
              />
            })
          }
      </Routes>
      <div className="project__info">
        <p>ROLES:</p>
        <p>{currentProject?.roles}</p>
      </div>

      <div className="project__footer">
        <div className="project__visit">
          <Link className={`link link--project-visit`}>
            <p>VISIT</p>
            <ArrowUpRight className={`color-bg--black color--white`}/>
          </Link>
        </div>
      </div>
    </main>
    
    <NavbarProjects projects={projects} index={currentProject?.index}/>
  </section>
}
