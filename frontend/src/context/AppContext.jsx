import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for the app
// This context will be used to share state and functions across the application
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSellar, setIsSellar] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    const value = {
        navigate,
        user,
        setUser,
        isSellar,
        setIsSellar,
        showUserLogin,
        setShowUserLogin,
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