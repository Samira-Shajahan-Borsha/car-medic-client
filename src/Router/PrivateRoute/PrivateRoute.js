import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16'>
            <button className="btn loading">loading</button>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;