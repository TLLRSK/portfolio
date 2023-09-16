import './Hello.scss';
import HeaderSection from "../../components/headers/headerSection";

export default function Hello() {
    return <section className="hello">
        <article className='hello__content'>
            <HeaderSection/>
            <main className='hello__main'>
                <div className="hello__main-block--description">
                    <div className="hello__main-description">
                        <p>I’m Pedro J. Gil</p>
                        <p>~ a Visual Dev & UX/UI Enginer based in Valencia (Spain).</p>
                    </div>
                </div>
                <div className="hello__main-block--dropdown">
                    <div className='hello__dropdown-tabs'>
                        <ul className="hello__dropdown-tab--fields hello__dropdown-fields">
                            <li className='hello__dropdown-fields-item'>
                                <span>a:</span>
                                <p>ILLUSTRATION</p>
                            </li>

                            <li className='hello__dropdown-fields-item'>
                                <span>a:</span>
                                <p>WEB DEVELOPMENT</p>
                            </li>

                            <li className='hello__dropdown-fields-item'>
                                <span>a:</span>
                                <p>UX/UI DESIGN</p>
                            </li>

                            <li className='hello__dropdown-fields-item'>
                                <span>a:</span>
                                <p>ANIMATION</p>
                            </li>

                            <li className='hello__dropdown-fields-item'>
                                <span>a:</span>
                                <p>ART DIRECTION</p>
                            </li>
                        </ul>

                        <div className="hello__dropdown-tab--tools">
                            <div className='hello__dropdown-tools-row'>
                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>

                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>

                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>
                            </div>

                            <div className='hello__dropdown-tools-row'>
                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>

                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>
                            </div>

                            <div className='hello__dropdown-tools-row'>
                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>

                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>

                                <div className="hello__dropdown-tools-item">
                                    <p>TECH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hello__dropdown-buttons'>
                        <div className='btn--hello-dropdown'>
                            <input type="radio" id='fields' name='skills' className='btn--hello-dropdown-toggler'/>
                            <label htmlFor="fields" className='btn--hello-dropdown-label'>Fields</label>
                        </div>

                        <div className='btn--hello-dropdown'>
                            <input type="radio" id='tools' name='skills' className='btn--hello-dropdown-toggler'/>
                            <label htmlFor="tools" className='btn--hello-dropdown-label'>Tools</label>
                        </div>
                        
                    </div>
                </div>
            </main>
        </article>
        
    </section>
}