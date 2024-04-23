import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePageTransition = () => {
    // Managing location
    let location = useLocation();

    // Handling navigation
    const [toSection, setToSection] = useState('');
    const [fromSection, setFromSection] = useState('');
    const [sectionStatus, setSectionStatus] = useState('');

    const navigate = useNavigate();

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

    return {toSection, setToSection, fromSection, sectionStatus, handleSectionNavigation}
}

export default usePageTransition;