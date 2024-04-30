import { createContext, useContext, useState } from "react";
import { projectsList } from "../../public";

const WorkTogglerContext = createContext();

export const useWorkTogglerContext = () => {
    const context = useContext(WorkTogglerContext);
    if (!context) {
        throw new Error("useWorkTogglerContext debe ser utilizado dentro de un WorkTogglerProvider");
    }
    return context;
}

export const WorkTogglerProvider = ({ children }) => {
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

    const contextValue = {
        selectedProject,
        onProject,
        projects,
        selectProject,
        closeProject
    };

    return (
        <WorkTogglerContext.Provider value={contextValue}>
            {children}
        </WorkTogglerContext.Provider>
    );
};

export default WorkTogglerProvider;