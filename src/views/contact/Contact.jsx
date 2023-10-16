import './Contact.scss'
import HeaderSection from "../../components/headers/headerSection";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contact() {

    // HANDLING WINDOW SIZE
    // media queries
    const mediaQueryMobile = 720;
    const mediaQueryDesktop = 1280;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    // checking if resize's working
    useEffect(() => {
        console.log(windowWidth) 
    }, [windowWidth]);
    
    return <section className="contact">
        <article className='contact__content'>
            <HeaderSection section={'Contact'} color={'color--white--200'}/>
            <main className='contact__main'>
                <div className='contact__subtitle'>
                    <p>Get</p>
                    <p>in</p>
                    <p>touch</p>
                </div>

                <div className='contact__mail'>
                    <Link to='mailto:' className='link--contact-mail link'>
                        {windowWidth <= mediaQueryMobile ? <p>HI@<br/>PEDRO<br/>JGIL<br/>.COM</p> : <p>HI@PEDROJGIL.COM</p>}
                    </Link>
                </div>
                
                <ul className="contact__sublinks-list">
                    <li className="contact__sublinks-list-item">
                        <Link to='' className='link--contact-sublink link'>
                            <p>Illos</p>
                        </Link>
                    </li>
                    <li className="contact__sublinks-list-item">
                        <Link to='' className='link--contact-sublink link'>
                            <p>LinkedIn</p>
                        </Link>
                    </li>
                    <li className="contact__sublinks-list-item">
                        <Link to='' className='link--contact-sublink link'>
                            <p>Twitter</p>
                        </Link>
                    </li>
                    <li className="contact__sublinks-list-item">
                        <Link to='' className='link--contact-sublink link'>
                            <p>Github</p>
                        </Link>
                    </li>
                </ul>
            </main>
        </article>
    </section>
}