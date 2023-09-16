import './Contact.scss'
import HeaderSection from "../../components/headers/headerSection";
import { Link } from 'react-router-dom';

export default function Contact() {
    return <section className="contact">
        <article className='contact__content'>
            <HeaderSection/>
            <div className='contact__subtitle'>
                <div>
                    <p>Get in touch</p>
                </div>
            </div>

            <div className='contact__mail'>
                <Link to='mailto:' className='link--contact-mail link'>
                    <p>HI<br/>@<br/>PEDROJGIL<br/>.COM</p>
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
        </article>
    </section>
}