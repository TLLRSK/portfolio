import {Routes, Route, useLocation, Link } from "react-router-dom";
import './ProjectTemplate.scss';
import HeaderProject from "../../../components/headers/HeaderProject";
import { useEffect, useState } from "react";
// import NavbarProjects from "../../../components/navbars/navbarProjects/NavbarProjects";
import { PROJECTS } from "../../../../public/projects";
import ArrowUpRight from "../../../components/arrows/ArrowUpRight";

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

  // // Setting projectColor
  const locationSetter = (pathname) => {
    const projectPath = pathname;
    const project = projects.find( project => projectPath === `/work/project${project.path}`);
    project ? projectSetter(project) : '';
  }

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
        <div className="project__info-roles">
          <p>ROLES</p>
          <p>{currentProject?.roles}</p>
        </div>

        <div className="project__info-techs">
          <p>TECHS</p>
          <p>{currentProject?.techs}</p>
        </div>
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

// PROJECTS NAVIGATOR

let NavbarProjects = (props) => {

  const { projects, index, mainColor, secondaryColor } = props;
  const [currentIndex, setCurrentIndex] = useState();
  const originIndex = index;

  // Paths array
  const pathsArr = projects;
  const pathsArrLength = projects.length;

  useEffect(() => {
    currentIndex != undefined ? console.log(currentIndex) : setCurrentIndex(originIndex);
  },[originIndex,currentIndex]);
  
  // Project Navigation
  const prevIndex = () => {
    if (currentIndex > 0) {
      return setCurrentIndex(currentIndex - 1);
    }
  }
  const nextIndex = () => {
    if (currentIndex < pathsArrLength-1) {
      return setCurrentIndex(currentIndex + 1);
    }
  }
  const toPrevProject = () => {
    return currentIndex > 0 ? `/work/project${pathsArr[currentIndex-1]?.path}` : `/work/project${pathsArr[currentIndex]?.path}`;
  }
  const toNextProject = () => {
    return currentIndex < pathsArrLength-1 ? `/work/project${pathsArr[currentIndex+1]?.path}` : `/work/project${pathsArr[currentIndex]?.path}`;
  }

  return <nav className='navbar-projects'>
    <div className={`navbar-projects-item ${currentIndex - 1 < 0 ? 'hidden' : ''}`}>
        <Link to={toPrevProject()}
        className={`navbar-projects-link--previous link`} 
        onClick={() => {prevIndex()}}>
            <p>PREV</p>
        </Link>
    </div>

    <div className="navbar-projects-item">
      <Link to="/work" className={`navbar-projects-link--back link`}>
        <p>BACK</p>
      </Link>
    </div>
    
    <div className={`navbar-projects-item ${currentIndex + 1 >= pathsArrLength ? 'hidden' : ''}`}>
        <Link to={toNextProject()}
        className={`navbar-projects-link--next link `}
        onClick={() => {nextIndex()}}>
            <p>NEXT</p>
        </Link>
    </div>
  </nav>
}