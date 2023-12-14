import { PROJECTS } from "../../../public/projects";
import { Link } from "react-router-dom";
import ArrowDownRight from "../../components/Arrows/ArrowDownRight";
import './Work.scss';
import HeaderSection from "../../components/Headers/HeaderSection/HeaderSection";
import Project from "../../components/Project/Project";

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

                    {projects.map( (project) => (
                        <Project key={project.title} title={project.title} description={project.description}/>
                        )
                    )}
                </div>
            </main>
        </article>
    </section>
}