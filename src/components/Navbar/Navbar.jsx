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

  // Color by location
  const [color, setColor] = useState('');

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

  // Setting color by location
  const locationColor = (path) => {
    if (path === '/') {
        setColor('white-0');
        // hidden ? setHidden(false) : '';
    } else {
        setColor('black');
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
    locationColor(location.pathname);
    setIndex();
  })

  return <nav className={`navbar color--${color}`}>
    {navLinks.map((el) => (
      <Link
      key={el.index}
      to={el.path} 
      className={`link navbar-item color--${color} ${path === el.path ? 'active' : ''}`} 
      onClick={(e) => handleLinkClick(e, el.path, el.index)}>
      
      <div className="navbar-item__text-box">
        <span className="navbar-item__index">{`${el.index})`}</span>
        <span className="navbar-item__title">{el.title}</span>
      </div>
      <div className="navbar-item__text-box--active">
        <span className="navbar-item__index--active">{`${el.index})`}</span>
        <span className="navbar-item__title--active">{el.title}</span>
      </div>
    </Link>
    ))}
  </nav>
}