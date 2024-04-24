import { Link } from "react-router-dom";
import './Navbar.scss';
import useNavbar from "../../hooks/useNavbar";

export default function Navbar() {
  
  const {links, currentPath, navigateTo} = useNavbar();

  return <nav className={`navbar`}>
    {links.map(el => (
      <Link key={el.title} to={el.path}  className={`link navbar-item ${currentPath === el.path ? 'active' : ''}`}  onClick={(e) => navigateTo(e, el)}>
        
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