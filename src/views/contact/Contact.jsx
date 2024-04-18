import './Contact.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';
import { LINKS } from '../../../public';

export default function Contact(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;

    // HANDLING WINDOW SIZE
    // media queries
    const mediaQueryMobile = 720;
    const mediaQueryDesktop = 1024;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const links = LINKS;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return <section className={`contact 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className='contact__content'>
            <HeaderSection handleSectionNavigation={handleSectionNavigation}/>
            <main className='contact__main'>
                <div className='contact__subtitle'>
                    <p>Let&apos;s</p>
                </div>
                <ul className='contact__links-list'>
                    {links.map((link, i) => {
                        return (
                            <li key={i} className='contact__links-list-item'>
                                <a href={link.url} className="link link--contact" target="_blank">

                                    <div className='link--contact-row'>
                                        <span className='link-span'>{link.action}</span>
                                        <div className='link-text'>
                                            {link.text.map((p,i) => {
                                                return <p key={i}>{p}</p>
                                            })}
                                        </div>
                                    </div>

                                    <div className='link--contact-row'>
                                        <span className='link-span'>&gt;</span>
                                        <div className='link-text'>
                                            {link.text.map((p,i) => {
                                                return <p key={i}>{p}</p>
                                            })}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='contact__bottom-row'>
                    <p>©2024</p>
                    <p>PJGV</p>
                </div>
            </main>
        </article>
    </section>
}