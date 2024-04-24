import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePageNavigation = () => {
    // Managing location
    let location = useLocation();
    
    const [toSection, setToSection] = useState(null);
    const [fromSection, setFromSection] = useState(null);
    const [sectionStatus, setSectionStatus] = useState(null);

    const navigate = useNavigate();
    
    // Transition classes logic
    const sectionTransition = 
        `${toSection == 'next'
        ? 'going-to-next'
        : toSection == 'prev'
        ? 'going-to-prev'
        : ''} 
        ${fromSection == 'next'
        ? 'coming-from-next'
        : fromSection == 'prev'
        ? 'coming-from-prev'
        : ''} 
        ${sectionStatus}`;

    const handleNavigation = (e,path,toSection) => {
        e.preventDefault();

        setToSection(toSection)

        setTimeout(() => {
            setSectionStatus('inactive')
            navigate(path)
            toSection === 'next' ? setFromSection('prev') : setFromSection('next');
            setToSection('')
        },200)
    }

    // Checking location
    useEffect(() => {
        setTimeout(() => {
            setFromSection(null)
            setSectionStatus('active')
        },100)
   
    },[location]);

    return {toSection, setToSection, fromSection, sectionStatus, handleNavigation, sectionTransition};
}

export default usePageNavigation;