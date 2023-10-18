import { Link } from 'react-router-dom';
import './HeaderProject.scss'

export default function HeaderProject(props) {
    
    let {projectTitle, projectColor} = props;

    return <header className="project__header">
        <div className={`project__header-block--left`}>
            <div className={`project__header-square color-bg--${projectColor}`}></div>
            <h2 className='project__header-title'>
                {projectTitle}
            </h2>
        </div>

        <div className='project__header-block--right'>
            <div className="project__header-block--right">
                <Link to='/' className={`link link--project-to-home`}>
                    <p>pj</p>
                </Link>
            </div>
        </div>
    </header>
}