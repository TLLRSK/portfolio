import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePageNavigation = () => {
    // Managing location
    let location = useLocation();

    // Handling navigation
    const [toSection, setToSection] = useState('');
    const [fromSection, setFromSection] = useState('');
    const [sectionStatus, setSectionStatus] = useState('');

    const navigate = useNavigate();
    
    const sectionTransition = `${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
    ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
    ${sectionStatus}`;

    const handleFromSection = (toSection) => {
        toSection === 'next' ? setFromSection('prev') : setFromSection('next');
    }
    //
    const handleSectionNavigation = (e,path,toSection) => {
        e.preventDefault();
        setToSection(toSection)
        setTimeout(() => {
            setSectionStatus('inactive')
            navigate(path)
            handleFromSection(toSection);
            setToSection('')
        },200)
    }

    // Checking location
    useEffect(() => {
        // setFromSection('')
        setTimeout(() => {
            setFromSection('')
        },100)
        setTimeout(() => {
            setSectionStatus('active')
        },300)
    },[location])

    return {toSection, setToSection, fromSection, sectionStatus, handleSectionNavigation, sectionTransition}
}

export default usePageNavigation;