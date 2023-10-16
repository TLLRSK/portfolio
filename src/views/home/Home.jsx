import './Home.scss';
export default function Home() {
    return <section className="home">
        <header className="home__header">
            <h1 className="home-title">pedro j. gil</h1>

            <div className="home-blank-box"></div>
        </header>

        <div className="home__main-block">
            <div className="home__description">
                <p>UX/UI</p>
                <p>ENGINEER</p>
            </div>
            <div className="home-ellipse"></div>
        </div>
    </section>
}