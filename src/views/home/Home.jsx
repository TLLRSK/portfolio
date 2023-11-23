import './Home.scss';

export default function Home(props) {
    const {toSection, fromSection, sectionStatus} = props;
    
    return <section className={`home 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
            
        <header className="home__header">
            <div className="home__header-title">
                <h1 className='home__header-title-text'>PEDRO <span className='f-weight--extralight f-style--italic'>J.</span> GIL</h1>
            </div>

            <div className="home__header-subtitle">
                <div className="home__header-subtitle-box">
                    <h2 className='home__header-subtitle-text'>FRONTEND <span className='f-style--normal'>DEV</span></h2>
                </div>
            
                <div className="home__header-subtitle-box">
                    <h2 className='home__header-subtitle-text'>UX/UI <span className='f-style--normal'>DESIGNER</span></h2>
                </div>
            </div>

            <div className='home__header-ellipse'></div>

            <div className="home__header-copyright">
                <span className='home__header-copyright-text'>©2023</span>
            </div>
        </header>

        <main className='home__main'>
            <div className="home__main-round-box"></div>
        </main>
    </section>
}