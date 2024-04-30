import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePageNavigation = () => {
    let location = useLocation();
    
    const [currentPath, setCurrentPath] = useState('');
    const [toSection, setToSection] = useState(null);
    const [fromSection, setFromSection] = useState(null);
    const [sectionStatus, setSectionStatus] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const navigate = useNavigate();
    
    // Transition classes
    const sectionTransition = `${toSection == 'next' ? 'going-to-next': toSection == 'prev'? 'going-to-prev': ''} ${fromSection == 'next'? 'coming-from-next': fromSection == 'prev'? 'coming-from-prev': ''} ${sectionStatus}`;

    // Navigating
    const handleNavigation = (e,path,toSection) => {
        e.preventDefault();
        setToSection(toSection)

        setTimeout(() => {
            setSectionStatus('inactive')
            navigate(path)
            toSection === 'next' 
                ? setFromSection('prev') 
                : setFromSection('next');
            setToSection('')
        },200)
    }

    useEffect(() => {
        setTimeout(() => {
            setFromSection(null)
            setSectionStatus('active')
        },200)
    },[location]);

    return {
        currentPath,
        setCurrentPath,
        currentIndex,
        setCurrentIndex,
        toSection,  
        fromSection, 
        sectionTransition, 
        handleNavigation
    };
}

export default usePageNavigation;