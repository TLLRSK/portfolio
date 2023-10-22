import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar(props) {

  const {handleSectionNavigation} = props;
  
  // Nav Links
  const navLinks = [
    {index: 0, path: '/hello', title: 'Hello'},
    {index: 1, path: '/work', title: 'Work'},
    {index: 2, path: '/contact', title: 'Contact'}
  ]
    
  // Location
  let location = useLocation();

  // Nav visibility by location
  const [hidden, setHidden] = useState(false)

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
        setColor('white');
        // hidden ? setHidden(false) : '';
    } else if (path === '/hello') {
        setColor('green');
        // hidden ? setHidden(false) : '';
    } else if (path === '/work') {
        setColor('black');
        // hidden ? setHidden(false) : '';
    } else if (path === '/contact') {
        setColor('white');
        // hidden ? setHidden(false) : '';
    } else if (path === '/work/project/aboutme') {
        setColor('green');
      // setHidden(true);
    } else if (path === '/work/project/todoapp') {
        setColor('blue');
    } else if (path === '/work/project/quoteapp') {
      setColor('black')
    } else if (path === '/work/project/robbertas') {
      setColor('red')
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
      setPath(path)
    },400)
  }

  // Setting path and color by location
  useEffect(() => {
    setPath(location.pathname);
    locationColor(location.pathname);
    setIndex();
  })

  return <nav className={`nav color--${color} ${hidden ? 'hidden' : ''}`}>
    {navLinks.map((el) => (
      <Link
      key={el.index}
      to={el.path} 
      className={`link nav-item color--${color} ${path === el.path ? 'active' : ''}`} 
      onClick={(e) => handleLinkClick(e, el.path, el.index)}>
      
      <p className="nav-item__title">{el.title}</p>
    </Link>
    ))}
  </nav>
}