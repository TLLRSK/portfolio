import { PROJECTS, HeaderSection, SingleProject, SingleProjectLink } from "../../../public/index.js";
import useSetOnProject from "../../hooks/useSetOnProject.jsx";
import './Work.scss';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function Work(props) {
    const {toSection, fromSection, sectionStatus, handleSectionNavigation, location} = props;
    const [isSelected, setIsSelected] = useState(false);
    const {onProject, setOnProject} = useSetOnProject();
    const projects = PROJECTS;
    
    return <section className={`work 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}`}>
        <article className="work__content">

            <HeaderSection handleSectionNavigation={handleSectionNavigation} location={location}/>
            
            <main className="work__main">
                <div className={`work__projects-grid${onProject ? " hidden" : ""}`}>
                    {projects.map( (project) => (
                        <SingleProjectLink key={project.title} project={project}/>
                        )
                    )}
                </div>

                <div className={`work__single-project${onProject ? "" : " hidden"}`}>
                    <Routes>
                        {projects.map((project, i) => {
                            return (
                                <Route 
                                    key={project.title} 
                                    path={project.slug} 
                                    element={<SingleProject isSelected={isSelected} project={projects[i]}/>}>
                                </Route>
                            )
                        })}
                    </Routes>
                </div>
            </main>
        </article>
    </section>
}