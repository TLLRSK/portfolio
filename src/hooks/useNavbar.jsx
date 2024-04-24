import { useEffect, useState } from "react";
import { navLinks } from "../../public";
import { useLocation } from "react-router-dom";
import { usePageNavigationContext } from "../contexts/PageNavigationContext";

const useNavbar = () => {

    const {handleNavigation} = usePageNavigationContext();
   
    // Nav links
    const links = navLinks;

    // Location
    let location = useLocation();

    // Path
    const [currentPath, setCurrentPath] = useState('');

    // Index
    const [currentIndex, setCurrentIndex] = useState(null);

    // Handling link click
    const navigateTo = (e, el) => {
        e.preventDefault();

        const path = el.path;
        const index = el.index;

        if (currentPath !== path) {
            setCurrentIndex(index)
            // Calls handleNavigation from usePageNavigation
            currentIndex > index 
                ? handleNavigation(e,path,'prev') 
                : handleNavigation(e,path,'next');
        }
        return null;
    }

    // Setting path
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    return {links, currentPath, navigateTo};
}

export default useNavbar;