import { Link } from 'react-router-dom';
import './ProjectTab.scss';
import ArrowDown from '../Arrows/ArrowDown';

const ProjectTab = ({i, project, selectProject}) => {
    return (
        // <li key={i} className={`work__projects-grid-item project-tab hover--bg-b`}>
        <li key={i} className={`work__projects-grid-item project-tab`}>

            <div className="project-tab__cover">
                <span className='project-tab__index index'>{project.index}</span>
                <h3 className='project-tab__title title'>{project.title}</h3>
                <p className='project-tab__date date'>{project.date}</p>
                <p className='project-tab__type type'>{project.type}</p>
            </div> 

            <div className="project-tab__cover--hover">
                <span className='project-tab__title--hover title--hover'>{project.title}</span>
                <ArrowDown className="arrow arrow--project-tab color--secondary"/>
                <ArrowDown className="arrow arrow--project-tab color--secondary"/>
            </div >

            <button data-index={i} onClick={e => selectProject(e)} className="btn btn--select-project"/>
    </li>
    )
}

export default ProjectTab;