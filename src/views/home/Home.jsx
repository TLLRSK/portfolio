import './Home.scss';
export default function Home() {
    return <section className="home">
        <header className="home__header">
            <h1 className="home-title">pedro j. gil</h1>

            <div className="home-blank-box"></div>
        </header>

        <main className="home__main">
            <div className="home-ellipse">
                <div className="home__description">
                    <p>UX/UI ENGINEER</p>
                </div>
            </div>
        </main>
    </section>
}