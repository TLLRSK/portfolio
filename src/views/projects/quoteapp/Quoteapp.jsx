import './Quoteapp.scss';

export default function Quoteapp() {
    return <main className="quoteapp__main">
        <div className="quoteapp__block--top">
            <p>Get</p>
            <p>a</p>
            <p>bit</p>
            <p>of</p>
        </div>
        <div className="quoteapp__block--center quoteapp__words-toggler">
            <button className="btn--quoteapp-toggler quoteapp__word-toggler--adjectives">
                <p>INSPIRING</p>
            </button>
            <button className="btn--quoteapp-toggler quoteapp__word-toggler--nouns">
                <p>WISDOM</p>
            </button>
        </div>
        <div className="quoteapp__block--bottom">
            <p>with</p>
            <p>one</p>
            <p>click</p>
            <p>.</p>
        </div>
    </main>
}