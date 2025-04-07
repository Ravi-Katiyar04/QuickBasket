import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for the app
// This context will be used to share state and functions across the application
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const nevigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSller, setIsSller] = useState(false);

    const value = {
        nevigate,
        user,
        setUser,
        isSller,
        setIsSller,
    };

    return (
        <AppContext.Provider
            value={value}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppCOntext = () => {
    return useContext(AppContext);
};