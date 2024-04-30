import { createContext, useContext } from "react";
import usePageNavigation from "../hooks/usePageNavigation";

const PageNavigationContext = createContext();

export const usePageNavigationContext = () => useContext(PageNavigationContext);

export const PageNavigationProvider = ({ children }) => {
    const pageNavigation = usePageNavigation();

    return (
        <PageNavigationContext.Provider value={pageNavigation}>
            {children}
        </PageNavigationContext.Provider>
    );
};

export default PageNavigationProvider;