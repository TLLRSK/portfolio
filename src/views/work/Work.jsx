import { PROJECTS } from "../../../public/projects";
import { Link } from "react-router-dom";
import ArrowDownRight from "../../components/Arrows/ArrowDownRight";
import './Work.scss';
import HeaderSection from "../../components/Headers/HeaderSection/HeaderSection";

export default function Work(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
    const projects = PROJECTS;
    
    return <section className={`work 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className="work__content">

            <HeaderSection section={'w'} color={'black'} handleSectionNavigation={handleSectionNavigation}/>
            
            <main className="work__main">
                <div className="work__subtitle">
                    <p className="work__subtitle-text transition-delay--100">Select a project</p>
                </div>

                <div className="work__projects-grid">

                    {projects.map( (project,index) => (
                        <Link to={project.link} key={index} className={`work__projects-grid-item link after--${project.mainColor}`} target="_blank">
                            <div className="work__projects-grid-item-number">
                                <span className="work__projects-grid-item-number-text ff--literata transition-delay--200">{project.index}.</span>
                            </div>

                            <div className="work__projects-grid-item-title">
                                <h3 className="work__projects-grid-item-title-text transition-delay--400">{project.title}</h3>
                            </div>

                            <div className="work__projects-grid-item-arrow">
                                <ArrowDownRight className={"arrow--projects"}/>
                            </div>

                            <div className="work__projects-grid-item-title--hover">
                                <p>{project.title}</p>
                            </div>
                        </Link>
                        )
                    )}
                </div>
            </main>
        </article>
    </section>
}