import { Link } from "react-router-dom";
import './NavbarProjects.scss';

export default function NavbarProjects() {
    
    return <nav className='navbar-projects'>
        <Link className='navbar-projects-link--previous link'>
            <p>{'<'}</p>
            <p>Previous</p>
        </Link>
        <Link className='navbar-projects-link--next link'>
            <p>Next</p>
            <p>{'>'}</p>
        </Link>
    </nav>
}