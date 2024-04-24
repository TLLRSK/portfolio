import { useState } from "react";
import { HeaderSection, SingleProject, ProjectTab, projectsList } from "../../../public";
import { usePageNavigationContext } from "../../contexts/PageNavigationContext.jsx";
import './Work.scss';

export default function Work() {
    const {handleSectionNavigation, sectionTransition} = usePageNavigationContext();
    const [selectedProject, setSelectedProject] = useState(null);
    const [onProject, setOnProject] = useState(false);
    const projects = projectsList;
    
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

    return <section className={`work ${sectionTransition}`}>
        <article className="work__content">
            <HeaderSection handleSectionNavigation={handleSectionNavigation} sectionIndex={"2"} sectionName={"W"}/>
            
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