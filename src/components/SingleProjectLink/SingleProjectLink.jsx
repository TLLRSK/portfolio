import { Link } from 'react-router-dom';
import './SingleProjectLink.scss';

const SingleProjectLink = ({project}) => {
    return (
        <Link to={`/work/${project.slug}`} className="link link--single-project work__project">
            <div className="work__project-cover">
                <div className="work__project-number">
                    <span className="work__project-number-text ff--literata">{project.index}.</span>
                </div>

                <div className="work__project-title">
                    <h3 className="work__project-title-text transition-delay--300">{project.title}</h3>
                </div>

                <div className="work__project-expand">
                    <span className="work__project-expand-symbol"></span>
                    <span className="work__project-expand-symbol"></span>
                </div>
            </div>
        </Link>
    )
}

export default SingleProjectLink;