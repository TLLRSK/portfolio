import './Project.scss';
import { Link } from "react-router-dom";
import ArrowUpRight from "../Arrows/ArrowUpRight";

export default function Project(props) {
    const {index, title, description, techList, linkGithub, linkVisitProject} = props;
    return <>
        <div className="work__projects-grid-item work__project">
            <div className="work__project-cover">
                <div className="work__projects-grid-item-number">
                    <span className="work__projects-grid-item-number-text ff--literata transition-delay--200">{index}.</span>
                </div>

                <div className="work__projects-grid-item-title">
                    <h3 className="work__projects-grid-item-title-text transition-delay--400">{title}</h3>
                </div>
            </div>

            <div className="work__project-description">
                <div className="work__project-details">
                    <div className="work__project-title">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="work__project-techs">
                        <h4>Techs</h4>
                        <p>{techList}</p>
                    </div>
                </div>
                <ul className="work__project-links">
                    <li className="project-link">
                        <Link to={linkGithub}>
                            <span>Github</span>
                            <ArrowUpRight className={'arrow--project color--black'}/>
                        </Link>
                    </li>
                    <li className="project-link">
                        <Link to={linkVisitProject}>
                            <span>Visti project</span>
                            <ArrowUpRight className={'arrow--project color--black'}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}