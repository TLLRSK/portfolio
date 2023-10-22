import './Hello.scss';
import { useState } from 'react';
import HeaderSection from '../../components/Headers/HeaderSection';
import ArrowForward from '../../components/Arrows/ArrowForward';
import ArrowBackward from '../../components/Arrows/ArrowBackward';


export default function Hello(props) {

    const [page, setPage] = useState(false);
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;

    return <section className={`hello 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>

        <article className='hello__content'>

            <HeaderSection section={'Hello'} color={'green'} handleSectionNavigation={handleSectionNavigation}/>

            <main className='hello__main'>
                <div className='hello__main-page'>
                    <div className={`hello__main--page-1 ${page == true ? 'hidden' : 'visible'}`}>

                        <div className="hello__description-block--1">
                            <div>
                                <span className='hello__description-number--1'>01)</span>
                                <p>I’M PEDRO J. GIL</p>
                            </div>
                            <div>
                                <span className='hello__description-number--1'>02)</span>
                                <p>VISUAL DEV, FRONTEND DEV & UX/UI ENGINEER</p>
                            </div>
                            
                        </div>

                        <div className="hello__description-block--2">
                            <div>
                                <span className='hello__description-number--1'>03)</span>
                                <p>CRAFTING CUTIE DIGITAL EXPERIENCES</p>
                            </div>
                            <div>
                                <span className='hello__description-number--1'>04)</span>
                                <p>BASED IN VALENCIA (SPAIN)</p>
                            </div>
                        </div>
                    </div>

                    <div className={`hello__main--page-2 ${page == true ? 'visible' : 'hidden'}`}>

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
                                <p>PHP</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>REACT</p>
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>FIGMA</p>
                                </div>
                                
                                <div className="hello__tools-grid-item">
                                    
                                </div>

                                <div className="hello__tools-grid-item">
                                    <p>WORD<br/>PRESS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='hello__page-toggler'>
                    <input type="checkbox" className="hello__page-switch" id="page-switch"  onClick={(e) => setPage(e.target.checked)}/>

                    <label htmlFor="page-switch" className='hello__page-toggler-block' >
                        {page ?
                            <div className='hello__page-toggler-content'>
                                <span className='hello__page-toggler-number'>(2/2)</span>
                                <div className='hello__page-toggler-arrow'>
                                    <ArrowBackward className={'arrow--hello-page-2'}/>
                                </div>
                            </div>
                        : 
                            <div className='hello__page-toggler-content'>
                                <span className='hello__page-toggler-number'>(1/2)</span>
                                <div className='hello__page-toggler-arrow'>
                                    <ArrowForward className={'arrow--hello-page-1'}/>
                                </div>
                            </div>
                            }
                    </label>
                </div>
            </main>
        </article>
    </section>
}