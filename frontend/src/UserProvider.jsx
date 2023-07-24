import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    
    const [loggedin, setLoggedin] = useState(currentUser !== null);

    const logout = () => {
        sessionStorage.removeItem("user");
        setLoggedin(false);
        navigate("/login");
    }

    return (
        <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
    );
}