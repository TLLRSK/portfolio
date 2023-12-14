import './Hello.scss';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';
import ArrowForward from '../../components/Arrows/ArrowForward';
import { useEffect, useState } from 'react';
import ArrowBackward from '../../components/Arrows/ArrowBackward';


export default function Hello(props) {

    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setPageNumber(1)
        },100)
    },[])

    return <section className={`hello 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}
        on-page--${pageNumber === 1 ? '1' : pageNumber === 2 ? '2' : '0'}`}>

        <HeaderSection section={'h'} color={'black'} handleSectionNavigation={handleSectionNavigation}/>

        <main className={`hello__main`}>
            <div className="hello__slider">

                <div className={`hello__page hello__page--1 ${pageNumber === 1 ? 'visible' : 'hidden'}`}>
                    <div className="hello__title">
                        <span className="hello__title-text hello__title-text--page-1 transition-delay--200">1.</span>
                        <h3 className="hello__title-text hello__title-text--page-1 transition-delay--200">HI</h3>
                    </div>

                    <div className="hello__description">
                        <div className="hello__text-block hello__text-block--border overflow--hidden">
                            <p className="hello__description-paragraph transition-delay--400">
                                I&apos;m Pedro, UX/UI DESIGNER & FRONTEND DEV based in Valencia. 
                                Working as freelance VISUAL ARTIST for +10 years.
                            </p>
                            <p className="hello__description-paragraph transition-delay--600">
                                Crafting cutie digital journeys from a useful and creative vision for every kind of user.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`hello__page hello__page--2 ${pageNumber === 2 ? 'visible' : 'hidden'}`}>
                    <div className="hello__list-box">
                        <div className="hello__title overflow--hidden">
                            <span className="hello__title-text hello__title-text--page-2 transition-delay--200">2.</span>
                            <h3 className='hello__title-text hello__title-text--page-2 transition-delay--200'>Fields</h3>
                        </div>
                        
                        <ul className="hello__list hello__list--fields">
                            <li className="hello__list-item">
                                <span className='hello__list-item-character transition-delay--400'>a)</span>
                                <p className='hello__list-paragraph hello__item-text transition-delay--400'>Illustration</p>
                            </li>
                            <li className="hello__list-item">
                                <span className='hello__list-item-character transition-delay--400'>b)</span>
                                <p className='hello__list-paragraph hello__item-text transition-delay--400'>Web Development</p>
                            </li>
                            <li className="hello__list-item">
                                <span className='hello__list-item-character transition-delay--400'>c)</span>
                                <p className='hello__list-paragraph hello__item-text transition-delay--400'>UX/UI Design</p>
                            </li>
                            <li className="hello__list-item">
                                <span className='hello__list-item-character transition-delay--400'>d)</span>
                                <p className='hello__list-paragraph hello__item-text transition-delay--400'>2D Animation</p>
                            </li>
                        </ul>
                    </div>

                    <div className="hello__list-box">
                        <div className="hello__title overflow--hidden">
                            <span className="hello__title-text hello__title-text--page-2 transition-delay--600">3.</span>
                            <h3 className='hello__title-text hello__title-text--page-2 transition-delay--600'>Tools</h3>
                        </div>

                        <ul className="hello__list hello__list--tools">
                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--800'>Html</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--center">
                                    <p className='hello__list-paragraph transition-delay--800'>Css</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--end">
                                    <p className='hello__list-paragraph transition-delay--800'>Js</p>
                                </li>
                            </div>

                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--800'>React</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--end">
                                    <p className='hello__list-paragraph transition-delay--800'>Php</p>
                                </li>
                            </div>

                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--800'>Figma</p>
                                </li>
                                <li className="hello__list-item">
                                    <p className='hello__list-paragraph transition-delay--800'>Wordpress</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`hello__page-toggler ${pageNumber === 1 ? "jc--end" : "jc--start"}`}>
                <button className={`btn--hello-page-toggler hello__page-toggler-btn color--black tx--left ${pageNumber === 1 ? 'visible' : pageNumber === 0 ? 'visible' : 'hidden'}`}
                    onClick={() => pageNumber === 1 ? setPageNumber(2) : ''}>
                    <div className="hello__next-page">
                        <span className="hello__next-page-title">FIELDS/TOOLS</span>
                        <div className='hello__page-toggler-arrow'>
                            <ArrowForward className={"arrow--hello-page-toggler--forward"}/>
                            <ArrowForward className={"arrow--hello-page-toggler--forward-hover"}/>
                        </div>
                    </div>
                </button>

                <button className={`btn--hello-page-toggler hello__page-toggler-btn color--black tx--right ${pageNumber === 2 ? 'visible' : 'hidden'}`}
                    onClick={() => pageNumber === 2 ? setPageNumber(1) : ''}>
                    <div className="hello__next-page">
                        <div className='hello__page-toggler-arrow'>
                            <ArrowBackward className={"arrow--hello-page-toggler--backward"}/>
                            <ArrowBackward className={"arrow--hello-page-toggler--backward-hover"}/>
                        </div>
                        <span className="hello__next-page-title">HI</span>
                    </div>
                </button>
            </div>
        </main>
    </section>
}