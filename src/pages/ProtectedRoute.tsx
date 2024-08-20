import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import LoadingPage from "./loading-page/LoadingPage.tsx";
import useAuth from "../hooks/useAuth.ts";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading) {
        return <LoadingPage />
    }

    if (!user) {
        return <Navigate to="auth" state={{ from: location }} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;