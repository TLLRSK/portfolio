import { PROJECTS, HeaderSection, SingleProject, ProjectTab } from "../../../public/index.js";
import './Work.scss';
import { useState } from "react";

export default function Work(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation, location} = props;
    const [selectedProject, setSelectedProject] = useState(null);
    const [onProject, setOnProject] = useState(false);
    const projects = PROJECTS;
    
    const selectProject = (e) => {
        const project = projects[e.target.dataset.index];
        setSelectedProject(project)
        setTimeout(() => {
            setOnProject(true)
        }, 100)
    }

    const closeProject = () => {
        setOnProject(false)
    }

    return <section className={`work 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className="work__content">
            <HeaderSection handleSectionNavigation={handleSectionNavigation} location={location}/>
            
            <main className="work__main">
                <ul className={`work__projects-grid${onProject ? " hidden" : ""}`}>
                    {projects.map( (project, i) => (
                        <ProjectTab key={project.title} i={i} project={project} selectProject={selectProject}/>
                        )
                    )}
                </ul>

                <div className={`work__single-project${onProject ? "" : " hidden"}`}>
                   {selectedProject &&  <SingleProject project={selectedProject} />}
                </div>

                <div className={`btn--close-project${onProject ? "" : " hidden"}`}>
                    <button className="btn" onClick={() => closeProject()}>
                        <span className="burger"></span>
                    </button>
                </div>
            </main>
        </article>
    </section>
}