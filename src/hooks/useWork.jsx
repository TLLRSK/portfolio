import { useState } from "react";
import { projectsList } from "../../public";

const useWork = () => {
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

    return {selectedProject, onProject, projects, selectProject, closeProject}
}

export default useWork;