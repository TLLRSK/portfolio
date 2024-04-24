import {useTimer} from '../../../public/hooks.js';
import { usePageNavigationContext } from '../../contexts/PageNavigationContext.jsx';
import './Home.scss';

export default function Home() {
    const {sectionTransition} = usePageNavigationContext();
    const {currentTime} = useTimer();
    
    return <section className={`home ${sectionTransition}`}>
            
        <header className="home__header">
            <div className="home__header-title">
                <h1 className='title'>PEDRO J. GIL</h1>
            </div>

            <div className="home__header-subtitle">
                <p className='subtitle'>Front Dev</p>
            </div>

            <div className="home__header-timer">
                <span className='timer'>{currentTime}</span>
            </div>
        </header>

        <main className='home__main'>
            <div className="home__main-round-box"></div>
        </main>
    </section>
}