import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.scss';

export default function Navbar(props) {

  const {handleSectionNavigation} = props;
  
  // Nav Links
  const navLinks = [
    {index: 'a', path: '/hello', title: 'Hello'},
    {index: 'b', path: '/work', title: 'Work'},
    {index: 'c', path: '/contact', title: 'Contact'}
  ]
    
  // Location
  let location = useLocation();

  // Path
  const [path, setPath] = useState();

  // Index
  const [currentIndex, setCurrentIndex] = useState();

  // Finding index
  const setIndex = () => {
    if (navLinks.find((e) => e.path === path)) {
      //if we are not home
      return setCurrentIndex(navLinks.find((e) => e.path === path).index);
    } else {
      //home index
      return setCurrentIndex(-1)
    }
  }

  
  // Handling link click
  const handleLinkClick = (e,path,index) => {
    e.preventDefault();
    setCurrentIndex(index)
    currentIndex > index 
      ? handleSectionNavigation(e,path,'prev') 
      : handleSectionNavigation(e,path,'next');
    
    setTimeout(() => {
      
    },400)
  }

  // Setting path and color by location
  useEffect(() => {
    setPath(location.pathname);
    setIndex();
  })

  return <nav className={`navbar`}>
    {navLinks.map((el) => (
      <Link
      key={el.index}
      to={el.path} 
      className={`link navbar-item ${path === el.path ? 'active' : ''}`} 
      onClick={(e) => handleLinkClick(e, el.path, el.index)}>
      
      <div className="navbar-item__title-container">
        <h3 className="navbar-item__title title">{el.title}</h3>
      </div>

      <div className="navbar-item__title-container--active">
        <h3 className="navbar-item__title--active title--active">{el.title}</h3>
      </div>
    </Link>
    ))}
  </nav>
}