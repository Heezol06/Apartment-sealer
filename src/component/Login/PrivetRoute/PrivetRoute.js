import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) {
        return (<div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;