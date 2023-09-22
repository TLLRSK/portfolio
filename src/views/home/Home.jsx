import './Home.scss';
export default function Home() {
    return <section className="home">
        <header className="home__header">
            <h1 className="home-title">PJ ~</h1>

            <div className="home-blank-box"></div>
        </header>

        <div className="home__main-block">
            <div className="home__description">
                <p>Crafting cutie digital experiences</p>
            </div>
            <div className="home-ellipse"></div>
        </div>
    </section>
}