import './HeaderSection.scss';

export default function HeaderSection() {
    return <header className="section__header">
        <h2 className="section__header-title">
            SECTION
        </h2>

        <div className="section__close-btn">
            <input type="checkbox" id="btn-close-toggler" className="btn-close-toggler"/>
            <label htmlFor="btn-close-toggler" className="btn-close-cross">
                <span className="btn-close-cross-stick"></span>
                <span className="btn-close-cross-stick"></span>
            </label>
        </div>
    </header>
}