import './Project.scss';
import { Link } from "react-router-dom";
import ArrowUpRight from "../Arrows/ArrowUpRight";

export default function Project(props) {
    const {index, title, description, techList, linkGithub, linkVisitProject} = props;
    return <>
        <label className="work__project">
            <input type="radio" name="project" className='work__project-radio'/>
            
            <div className="work__project-cover">
                <div className="work__project-number">
                    <span className="work__project-number-text ff--literata">{index}.</span>
                </div>

                <div className="work__project-title">
                    <h3 className="work__project-title-text transition-delay--300">{title}</h3>
                </div>

                <div className="work__project-expand">
                    <span className="work__project-expand-symbol"></span>
                    <span className="work__project-expand-symbol"></span>
                </div>
            </div>

            <div className="work__project-info">
                <div className="work__project-info-row">
                    <div className="work__project-info-row-item work__project-info-row-item--column">
                        <h4 className='work__project-info-title-text'>{title}</h4>
                        <p>{description}</p>
                    </div>

                    <div className="work__project-info-row-item work__project-info-row-item--column">
                        <h4 className='work__project-info-title-text'>Techs</h4>
                        <p>{techList}</p>
                    </div>
                </div>

                <ul className="work__project-info-row">
                    <li className="work__project-info-row-item work__project-info-row-item--row">
                        <Link to={linkGithub} className='link work__project-link' target='_blank'>
                            <span>Github</span>
                            <ArrowUpRight className={'arrow--project color--black'}/>
                        </Link>
                    </li>
                    
                    <li className="work__project-info-row-item work__project-info-row-item--row jc--end">
                        <Link to={linkVisitProject} className='link work__project-link' target='_blank'>
                            <span>Visit project</span>
                            <ArrowUpRight className={'arrow--project color--black'}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </label>
    </>
}