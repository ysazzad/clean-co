import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const [admin] = useAdmin()
    if (!admin) {
        return <Navigate to="/" replace />
    }
    return children

};

export default AdminRoute;