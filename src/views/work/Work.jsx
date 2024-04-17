import { PROJECTS } from "../../../public/projects";
import './Work.scss';
import HeaderSection from "../../components/Headers/HeaderSection/HeaderSection";
import ProjectTab from "../../components/ProjectTab/ProjectTab";
import SingleProject from "../../components/SingleProject/SingleProject";
import { useState } from "react";

export default function Work(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
    const [isSelected, setIsSelected] = useState(false);
    const projects = PROJECTS;
        
    const selectProject = () => {
        setIsSelected(true);
    }

    
    return <section className={`work 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className="work__content">

            <HeaderSection handleSectionNavigation={handleSectionNavigation}/>
            
            <main className="work__main">
                <div className="work__projects-grid">

                    {projects.map( (project) => (
                        <ProjectTab key={project.title} setIsSelected={setIsSelected} {...project} />
                        )
                    )}
                </div>
                <SingleProject isSelected={isSelected} project={projects[0]}/>
                <button>Close</button>
            </main>
        </article>
    </section>
}