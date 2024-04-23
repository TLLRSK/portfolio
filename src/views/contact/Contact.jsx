import './Contact.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';
import { LINKS } from '../../../public';

export default function Contact(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;

    const links = LINKS;

    const sectionTransition = `${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
    ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
    ${sectionStatus}`
    
    return <section className={`contact 
        ${sectionTransition}`}>
        <article className='contact__content'>
            <HeaderSection handleSectionNavigation={handleSectionNavigation}  sectionIndex={"3"} sectionName={"C"}/>
            <main className='contact__main'>
                <div className='contact__subtitle'>
                    <p className='subtitle'>Let&apos;s</p>
                </div>
                <ul className='contact__links-list'>
                    {links.map((link, i) => {
                        return (
                            <li key={i} className='contact__links-list-item'>
                                <a href={link.url} className="link link--contact" target="_blank">

                                    <div className='row'>
                                        <span className='span'>{link.action}</span>
                                        <div className='link-text'>
                                            {link.text.map((p,i) => {
                                                return <p className="text" key={i}>{p}</p>
                                            })}
                                        </div>
                                    </div>

                                    <div className='row row--hover'>
                                        <span className='span--hover'>&gt;</span>
                                        <div className='link-text--hover'>
                                            {link.text.map((p,i) => {
                                                return <p className="text--hover" key={i}>{p}</p>
                                            })}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='contact__bottom-row'>
                    <p className='bottom'>©2024</p>
                    <p className='bottom'>PJGV</p>
                </div>
            </main>
        </article>
    </section>
}