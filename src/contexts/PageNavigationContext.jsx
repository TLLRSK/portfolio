/*
    1. Create Context with createContext
    2. Wrap Context Provider around component tree
    3. Put any value in Provider's value property
    4. Read the value from any component
*/

import { createContext, useContext } from "react";
import usePageNavigation from "../hooks/usePageNavigation";

// Crear el contexto
const PageNavigationContext = createContext();

// Exportar el hook de contexto para usarlo en otros componentes
export const usePageNavigationContext = () => useContext(PageNavigationContext);

// Proveedor del contexto que utiliza el hook usePageNavigation
export const PageNavigationProvider = ({ children }) => {
    const pageNavigation = usePageNavigation();

    return (
        <PageNavigationContext.Provider value={pageNavigation}>
            {children}
        </PageNavigationContext.Provider>
    );
};

export default PageNavigationProvider;