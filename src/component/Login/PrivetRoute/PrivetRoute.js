import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) {
        return (<div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>)
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;