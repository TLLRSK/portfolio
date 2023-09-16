import './Home.scss';
export default function Home() {
    return <section className="home">
        <div className="home__main-block--top">
            <h1 className="home-title">~ PJ GV</h1>

            <div className="home-blank-box"></div>
        </div>

        <div className="home__main-block--center blurred">
            <div className="home-ellipse"></div>
        </div>

        <div className="home__main-block--botom">
            <h2 className="home-subtitle">developing</h2>
        </div>
    </section>
}