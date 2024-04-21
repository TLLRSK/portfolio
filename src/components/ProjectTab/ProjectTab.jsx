import { Link } from 'react-router-dom';
import './ProjectTab.scss';
import ArrowDown from '../Arrows/ArrowDown';

const ProjectTab = ({i, project, selectProject}) => {
    return (
        <li key={i} className={`work__projects-grid-item hover--bg-b`}>
            <div className="work__single-project-tab">
                <span className='work__single-project-index'>{project.index}</span>
                <h3 className='work__single-project-title'>{project.title}</h3>
                <p className='work__single-project-date'>{project.date}</p>
                <p className='work__single-project-type'>{project.type}</p>
            </div> 
            <div className="work__single-project-tab--hover">
                <span className='work__single-project-title--hover'>{project.title}</span>
                <ArrowDown className="arrow color--white"/>
                <ArrowDown className="arrow color--white"/>
            </div >
            <button data-index={i} onClick={e => selectProject(e)} className="btn btn--select-project"/>
    </li>
    )
}

export default ProjectTab;