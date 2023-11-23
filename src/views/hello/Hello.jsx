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
                        <h3 className="hello__title-text hello__description-header transition-delay--200">HI</h3>
                    </div>

                    <div className="hello__description">
                        <div className="hello__text-block hello__text-block--border">
                            <div className="overflow--hidden">
                                <p className="hello__description-paragraph transition-delay--400">I&apos;m Pedro<br/>UX/UI Designer<br/>& Frontend Dev <br/>based in Valencia.</p>
                            </div>
                            <div className="overflow--hidden">
                                <p className="hello__description-paragraph transition-delay--400">Working as freelance Visual Artist for +10 years.</p>
                            </div>
                        </div>

                        <div className="hello__text-block">
                            <div className="overflow--hidden">
                                <p className="hello__description-paragraph transition-delay--600">Crafting* (solo/coop) cutie digital journeys from a useful and creative vision.</p>
                            </div>
                            <div className="flex-1 flex ai--end jc--end overflow--hidden">
                                <p className="hello__description-paragraph ta--right transition-delay--600">*For every<br/>kind of user.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`hello__page hello__page--2 ${pageNumber === 2 ? 'visible' : 'hidden'}`}>
                    <div className="hello__list-box">
                        <div className="hello__title overflow--hidden">
                            <h3 className='hello__title-text hello__list-header transition-delay--200'>Fields</h3>
                        </div>
                        
                        <ul className="hello__list hello__list--border hello__list--fields">
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
                            <h3 className='hello__title-text hello__list-header transition-delay--600'>Tools</h3>
                        </div>

                        <ul className="hello__list hello__list--tools">
                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--700'>Html</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--center">
                                    <p className='hello__list-paragraph transition-delay--700'>Css</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--end">
                                    <p className='hello__list-paragraph transition-delay--700'>Js</p>
                                </li>
                            </div>

                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--700'>React</p>
                                </li>
                                <li className="hello__list-item flex-1 jc--end">
                                    <p className='hello__list-paragraph transition-delay--700'>Php</p>
                                </li>
                            </div>

                            <div className="hello__list-row">
                                <li className="hello__list-item flex-1">
                                    <p className='hello__list-paragraph transition-delay--700'>Figma</p>
                                </li>
                                <li className="hello__list-item">
                                    <p className='hello__list-paragraph transition-delay--700'>Wordpress</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>


            <button className="btn--hello-page-toggler color--black" onClick={() => pageNumber === 1 ? setPageNumber(2) : setPageNumber(1)}>
                    <div className={`hello__page-toggler-content tx--left ${pageNumber === 1 ? 'visible' : pageNumber === 0 ? 'visible' : 'hidden'}`}>
                        <div className="hello__current-page">
                            <span>1/2</span>
                        </div>
                        <div className="hello__next-page">
                            <span className="hello__next-page-title">FIELDS/TOOLS</span>
                            <ArrowForward className={"arrow--hello-page-toggler"}/>
                        </div>
                    </div>

                    <div className={`hello__page-toggler-content tx--right ${pageNumber === 2 ? 'visible' : 'hidden'}`}>
                        <div className="hello__next-page">
                            <ArrowBackward className={"arrow--hello-page-toggler"}/>
                            <span className="hello__next-page-title">HI</span>
                        </div>
                        <div className="hello__current-page">
                            <span>2/2</span>
                        </div>
                    </div>
             
            </button>
            {/* <button className="btn--hello-page-toggler color--black" onClick={() => pageNumber === 1 ? setPageNumber(2) : setPageNumber(1)}>
                {pageNumber === 1 ? 
                    <div className="hello__page-toggler-content">
                        <div className="hello__current-page">
                            <span>1/2</span>
                        </div>
                        <div className="hello__next-page">
                            <span className="hello__next-page-title">FIELDS/TOOLS</span>
                            <ArrowForward className={"arrow--hello-page-toggler"}/>
                        </div>
                    </div>
                : 
                    <div className="hello__page-toggler-content">
                        <div className="hello__next-page">
                            <ArrowBackward className={"arrow--hello-page-toggler"}/>
                            <span className="hello__next-page-title">HI</span>
                        </div>
                        <div className="hello__current-page">
                            <span>2/2</span>
                        </div>
                </div>
                }
            </button> */}
        </main>
    </section>
}