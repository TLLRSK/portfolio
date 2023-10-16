import { Link, useLocation } from "react-router-dom";
import './Navbar.scss';
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
          setColor('black--300');
          // hidden ? setHidden(false) : '';
      } else if (path === '/hello') {
          setColor('black--0');
          // hidden ? setHidden(false) : '';
      } else if (path === '/work') {
          setColor('black--100');
          // hidden ? setHidden(false) : '';
      } else if (path === '/contact') {
          setColor('white--200');
          // hidden ? setHidden(false) : '';
      } else if (path === '/work/project/aboutme') {
          setColor('green');
        // setHidden(true);
      } else if (path === '/work/project/todoapp') {
          setColor('blue');
      } else if (path === '/work/project/quoteapp') {
        setColor('black--100')
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

          <div>
            <span className={`nav-item__number ${link === 'hello' ? 'hidden' : ''}`}>1.</span>
            <span className={`nav-item__selected color-bg--${color} ${link === 'hello' ? 'visible' : ''}`}></span>
          </div>
          <span className="nav-item__pusher"></span>
          <p className="nav-item__title">Hello</p>

        </Link>

        <Link 
          to={'work'} 
          className={`link nav-item color--${color} ${link === 'work' ? 'active' : ''}`} 
          onClick={() => setLink('work')}>

          <div>
            <span className={`nav-item__number ${link === 'work' ? 'hidden' : ''}`}>2.</span>
            <span className={`nav-item__selected color-bg--${color} ${link === 'work' ? 'visible' : ''}`}></span>
          </div>
          <span className="nav-item__pusher"></span>
          <p className="nav-item__title">Work</p>
        </Link>
        
        <Link 
          to={'contact'}
          className={`link nav-item color--${color} ${link === 'contact' ? 'active' : ''}`}
          onClick={() => setLink('contact')}>

            <div>
              <span className={`nav-item__number ${link === 'contact' ? 'hidden' : ''}`}>3.</span>
              <span className={`nav-item__selected color-bg--${color} ${link === 'contact' ? 'visible' : ''}`}></span>
            </div>
            <span className="nav-item__pusher"></span>
            <p className="nav-item__title">Contact</p>
        </Link>
    </nav>
}