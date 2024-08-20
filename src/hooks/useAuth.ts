import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.tsx";

const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within the AuthContext");
    }
    return context;
};

export default useAuth;