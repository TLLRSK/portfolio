import { HeaderSection, SingleProject, ProjectTab, BtnWorkCloseProject} from "../../../public";
import { usePageNavigationContext } from "../../contexts/PageNavigationContext.jsx";
import useWork from "../../hooks/useWork.jsx";
import './Work.scss';

export default function Work() {
    const {sectionTransition} = usePageNavigationContext();
    const {projects, selectedProject, onProject, selectProject, closeProject} = useWork();

    return (
        <section className={`work ${sectionTransition}`}>

            <article className="work__content">

                <HeaderSection sectionIndex={"2"} sectionName={"W"}/>
                
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

                    <BtnWorkCloseProject onProject={onProject} closeProject={closeProject}/>

                </main>

            </article>

        </section>
    )
}