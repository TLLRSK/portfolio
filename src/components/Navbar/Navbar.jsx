import { Link } from "react-router-dom";
import './Navbar.scss';
import useNavbar from "../../hooks/useNavbar";
import { useWorkTogglerContext } from "../../contexts/WorkTogglerContext";

export default function Navbar() {
  
  const {links, currentPath, navigateTo} = useNavbar();
  const {onProject, closeProject} = useWorkTogglerContext();

  const handleClick = (e, el) => {
    if (el.path === '/work' && onProject) {
      closeProject();
    }
    navigateTo(e, el)
  }

  return <nav className={`navbar`}>
    
    {links.map(el => {
      return (
        <Link 
          key={el.title} 
          to={el.path} 
          className={`link navbar-item ${currentPath === el.path ? 'active' : ''}`}  
          onClick={(e) => handleClick(e, el)
          }
        >
        <div className="navbar-item__title-container">
        <span className="navbar-item__index index">{`${el.index})`}</span>
          <h3 className="navbar-item__title title">{el.title}</h3>
        </div>

        <div className="navbar-item__title-container--active">
          <span className="navbar-item__index--active index--active">{`${el.index})`}</span>
          <h3 className="navbar-item__title--active title--active">{el.title}</h3>
        </div>

      </Link>
      )
    })}
  </nav>
}