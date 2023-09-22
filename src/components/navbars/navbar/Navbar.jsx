import { Link, useLocation } from "react-router-dom";
import './Navbar.scss';
import { useEffect, useState } from "react";

export default function Navbar() {
    // Managing location
    let location = useLocation();
    {console.log(location.pathname);}

    // Setting style by location
    let [color, setColor] = useState('');

    // Checking location
    useEffect(() => {
      console.log(`now we are on ${location.pathname}`);
      locationColor(location.pathname);
    },[location])

    // Calling back useState
    let locationColor = (path) => {
      switch(path) {
        case '/' : setColor('color--black--100')
          break;
        case '/hello' : setColor('color--blue--0')
          break;
        case '/work' : setColor('color--black--0')
          break;
        case '/contact' : setColor('color--white--300')
          break;
      }
    }
    
    return <nav className={`nav ${color}`}>
        <Link to={'hello'} className={`link nav-item ${color}`}>
            <span className="nav-item__number">1.</span>
            <p className="nav-item__title">HELLO</p>
        </Link>
        <Link to={'work'} className={`link nav-item ${color}`}>
            <span className="nav-item__number">2.</span>
            <p className="nav-item__title">WORK</p>
        </Link>
        <Link to={'contact'} className={`link nav-item ${color}`}>
            <span className="nav-item__number">3.</span>
            <p className="nav-item__title">CONTACT</p>
        </Link>
    </nav>
}