import React from 'react';
import useAuth from './../../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return (<div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;