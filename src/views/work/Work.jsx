import { PROJECTS } from "../../../public/projects";
import { Link } from "react-router-dom";
import ArrowDownRight from "../../components/Arrows/ArrowDownRight";
import HeaderSection from "../../components/Headers/HeaderSection";
import './Work.scss';

export default function Work(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
    const projects = PROJECTS;
    
    return <section className={`work 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className="work__content">

            <HeaderSection section={'Work'} color={'black'} handleSectionNavigation={handleSectionNavigation}/>
            
            <main className="work__main">
                <div className="work__main-block--top">
                    <p>PICK A PROJECT</p>
                </div>

                <div className="work__projects-grid">

                    {projects.map( (project,index) => (
                        <Link to={`project${project.path}`} key={index} className="work__projects-grid-item link">
                            <span className="work__projects-grid-item-number">{project.index}</span>

                            <h3 className="work__projects-grid-item-title">{project.title}</h3>

                            <ArrowDownRight className={"work__projects-grid-item-arrow"}/>

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