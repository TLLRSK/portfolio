import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavbarProjects.scss';

export default function NavbarProjects(props) {

    const { projects, index, mainColor, secondaryColor } = props;
    const [currentIndex, setCurrentIndex] = useState();
    const originIndex = index;
  
    // Paths array
    const pathsArr = projects;
    const pathsArrLength = projects.length;
  
    useEffect(() => {
      currentIndex != undefined 
      ? console.log(currentIndex) 
      : setCurrentIndex(originIndex);
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