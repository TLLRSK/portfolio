import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar(props) {
    
    // Managing location
    let location = useLocation();

    // Setting nav visibility by location
    const [hidden, setHidden] = useState(false)

    // Setting nav color by location
    const [color, setColor] = useState('');

    // Checking location & reseting nav if we are home
    useEffect(() => {
      location.pathname == '/' ? setLink('') : '';
      locationColor(location.pathname);
    })

    // Calling back useState
    let locationColor = (path) => {
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

    // Managing active link
    const [link, setLink] = useState();
    
    return <nav className={`nav color--${color} ${hidden ? 'hidden' : ''}`}>
        <Link 
          to={'hello'} 
          className={`link nav-item color--${color} ${link === 'hello' ? 'active' : ''}`} 
          onClick={() => setLink('hello')}>
          
          <p className="nav-item__title">Hello</p>

        </Link>

        <Link 
          to={'work'} 
          className={`link nav-item color--${color} ${link === 'work' ? 'active' : ''}`} 
          onClick={() => setLink('work')}>
          
          <p className="nav-item__title">Work</p>
        </Link>
        
        <Link 
          to={'contact'}
          className={`link nav-item color--${color} ${link === 'contact' ? 'active' : ''}`}
          onClick={() => setLink('contact')}>
            
            <p className="nav-item__title">Contact</p>
        </Link>
    </nav>
}