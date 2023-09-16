import './HeaderProject.scss'

export default function HeaderProject() {
    return <header className="project__header">
        <div className="project__header-tab">
            <h2 className="project__header-title">
                Project
            </h2>

            <div className="project__header-close-btn">
                <div className="btn-project-close"></div>
            </div>
        </div>
    </header>
}