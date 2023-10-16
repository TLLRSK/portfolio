import './Hello.scss';
import HeaderSection from "../../components/headers/headerSection";
import { useEffect, useState } from 'react';
import ArrowForward from '../../components/arrows/ArrowForward';
import ArrowBackward from '../../components/arrows/ArrowBackward';


export default function Hello() {

    const [page, setPage] = useState(false);

    return <section className="hello">
        <article className='hello__content'>

            <HeaderSection section={'Hello'} color={'color--black--0'}/>

            <main className='hello__main'>
                <div className='hello__main-page'>
                    <div className={`hello__main--page-1 ${page == true ? 'hidden' : 'visible'}`}>

                        <div className="hello__description-block--top">
                            <span className='hello__description-number--1'>01)</span>
                            <p>I’M PEDRO J. GIL <br/>
                                <span className='hello__description-text--bold'>VISUAL DEV</span>, <br/>
                                <span className='hello__description-text--bold'>FRONTEND DEV</span> <br/>
                                & <span className='hello__description-text--bold'>UX/UI ENGINEER</span> CRAFTING DIGITAL CUTIE EXPERIENCES
                            </p>
                        </div>

                        <div className="hello__description-block--bottom">
                            <div className="hello__description-basedin">
                                <p>(</p>
                                <p>Based in Valencia</p>
                                <p>)</p>
                            </div>
                        </div>
                    </div>

                    <div className={`hello__main--page-2 ${page == true ? 'visible' : 'hidden'}`}>
                        <span className='hello__description-number--2'>02)</span>

                        <div className="hello__fields">
                            <p className='hello__fields-title'>
                                FIELDS:
                            </p>

                            <ul className="hello__fields-list">
                                <li className='hello__fields-list-item'>
                                    <span>a:</span>
                                    <p>ILLUSTRATION</p>
                                </li>

                                <li className='hello__fields-list-item'>
                                    <span>b:</span>
                                    <p>WEB DEVELOPMENT</p>
                                </li>

                                <li className='hello__fields-list-item'>
                                    <span>c:</span>
                                    <p>UX/UI DESIGN</p>
                                </li>

                                <li className='hello__fields-list-item'>
                                    <span>d:</span>
                                    <p>ANIMATION</p>
                                </li>

                                <li className='hello__fields-list-item'>
                                    <span>e:</span>
                                    <p>ART DIRECTION</p>
                                </li>
                            </ul>
                        </div>

                        <div className="hello__tools">
                            <p className='hello__tools-title'>
                                TOOLS:
                            </p>
                            <div className='hello__tools-grid'>
                                <div className="hello__tools-grid-item">
                                    <p>HTML</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>CSS</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>SASS</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>JS</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>REACT</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>PHP</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>WORDPRESS</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>FIGMA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='hello__page-toggler'>
                    <input type="checkbox" className="hello__page-switch" id="page-switch"  onClick={(e) => setPage(e.target.checked)}/>

                    <label htmlFor="page-switch" className='hello__page-toggler-block' >
                        <div className={`hello__page-toggler-pusher ${page ? '' : 'active'}`}></div>
                        {page ?
                            <div className='hello__page-toggler-arrow'>
                                <ArrowBackward/>
                                <span className='hello__page-toggler-number'>01)</span>
                            </div>
                        : 
                            <div className='hello__page-toggler-arrow'>
                                <ArrowForward/>
                                <span className='hello__page-toggler-number'>02)</span>
                            </div>
                            }
                    </label>
                </div>
            </main>
        </article>
    </section>
}