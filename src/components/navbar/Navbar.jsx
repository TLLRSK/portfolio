import { Link } from "react-router-dom";
import './Navbar.scss';

export default function Navbar() {
    return <nav className="nav">
        <Link to={'hello'} className="link nav-item">
            <span className="nav-item__number">1</span>
            <h3 className="nav-item__page">HELLO</h3>
        </Link>
        <Link to={'work'} className="link nav-item">
            <span className="nav-item__number">2</span>
            <h3 className="nav-item__page">WORK</h3>
        </Link>
        <Link to={'contact'} className="link nav-item">
            <span className="nav-item__number">3</span>
            <h3 className="nav-item__page">CONTACT</h3>
        </Link>
    </nav>
}