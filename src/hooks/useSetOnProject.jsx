import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useSetOnProject = () => {
    let location = useLocation();

    const [onProject, setOnProject] = useState(false);
    
    const settingOnProject = () => {
        location && (location.pathname.includes("/work/")) 
        ? setOnProject(true)
        : setOnProject(false);
    }

    useEffect(() => {
        settingOnProject();
        console.log(location.pathname)
    }, [location])

    return {onProject, setOnProject}
}

export default useSetOnProject;