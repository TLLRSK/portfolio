import './Contact.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';

export default function Contact(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;

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
    
    return <section className={`contact 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className='contact__content'>
            <HeaderSection handleSectionNavigation={handleSectionNavigation}/>
            <main className='contact__main'>
                <div className='contact__subtitle--top'>
                    <span className='contact__subtitle-text transition-delay--200'>Get</span>
                    <span className='contact__subtitle-text transition-delay--200'>in</span>
                    <span className='contact__subtitle-text transition-delay--200'>touch</span>
                </div>

                <div className='contact__mail'>
                    <Link to='mailto:' className='contact__mail-link link'>
                        {windowWidth <= mediaQueryMobile ? <p>HI@<br/>PEDRO<br/>JGIL<br/>.COM</p> : windowWidth <= mediaQueryDesktop ? <p>HI@<br/>PEDROJGIL<br/><span className='contact__mail-span-aligned--right'>.COM</span></p> : <p>HI@PEDROJGIL.COM</p>}
                    </Link>
                </div>

                <div className='contact__subtitle--bottom'>
                    <span className='contact__subtitle-text transition-delay--200'>Say hi!</span>
                    <span className='contact__subtitle-text transition-delay--200'>:)</span>
                </div>
                
                <ul className="contact__sublinks-list">
                    <li className="contact__sublinks-list-item">
                        <Link to='https://estoybienestoybien.tumblr.com/' target='_blank' className='contact__sublink link'>
                            <span className='contact__sublink--idle'>Art</span>
                            <span className='contact__sublink--on-hover'>Art</span>
                        </Link>
                    </li>
                    
                    <li className="contact__sublinks-list-item">
                        <Link to='https://www.linkedin.com/in/pedro-j-gil-15b92b54/' target='_blank' className='contact__sublink link'>
                            <span className='contact__sublink--idle'>LinkedIn</span>
                            <span className='contact__sublink--on-hover'>LinkedIn</span>
                        </Link>
                    </li>
                    
                    <li className="contact__sublinks-list-item">
                        <Link to='https://github.com/TLLRSK' target='_blank' className='contact__sublink link'>
                            <span className='contact__sublink--idle'>Github</span>
                            <span className='contact__sublink--on-hover'>Github</span>
                        </Link>
                    </li>
                </ul>
            </main>
        </article>
    </section>
}