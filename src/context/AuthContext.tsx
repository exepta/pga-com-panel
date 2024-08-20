import {User} from "../entities/User.ts";
import React, {createContext, useCallback, useEffect, useState} from "react";
import {login_user, sessionCheck} from "../services/AuthService.ts";
import {useNavigate} from "react-router-dom";

export interface AuthContextType {
    user: User | null;
    login: (user_data: string, password: string) => Promise<void>;
    logout: () => void;
    checkSession: () => Promise<boolean>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const[loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // Login Function
    const login = async (user_data: string, password: string) => {
        try {
            const user_response: User = await login_user(user_data, password);
            if(user_response.username === "-") {
                return;
            }
            const { username: loggedInUsername, email, role } = user_response;
            setUser({ username: loggedInUsername, email, role });
            navigate("/");
        } catch (error) {
            console.error("Login Failed, ", error);
        }
    }

    // Logout Function
    const logout = useCallback(() => {
        if(user !== null) {
            setUser(null);
        }
        localStorage.removeItem('token');
        navigate('/auth');
    }, [navigate, user]);
    
    // Session check
    const checkSession = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            logout();
            return false;
        }
        try {
            const state = await sessionCheck();
            if(state.username === "-") {
                logout();
                return false;
            }

            if(user === null) {
                console.log(state);
                setUser(state);
            }

            return true;
        } catch (error) {
            console.error("Session check failed:", error);
            logout();
            return false;
        }
    }, [logout, user]);
    
    // Update site checks
    useEffect(() => {
        const verifySession = async () => {
            const state = await checkSession();
            if(state) {
                setLoading(false);
            }
        };

        verifySession().then(() => {});
    }, [checkSession]);
    
    return (
        <AuthContext.Provider value={{user, login, logout, checkSession, loading}}>
            {children}
        </AuthContext.Provider>
    );
};