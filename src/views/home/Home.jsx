import './Home.scss';

export default function Home(props) {
    const {toSection, fromSection, sectionStatus} = props;
    
    return <section className={`home 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
            
        <header className="home__header">
            <h1 className="home-title">PEDRO J GIL</h1>

            <div className="home-subtitle">
                <h2>UX/UI ENGINEER</h2>
            </div>
        </header>

        <main className="home__main">
            <div className="home-ellipse"></div>
        </main>
    </section>
}