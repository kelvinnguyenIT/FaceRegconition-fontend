import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthUser from './AuthUser';
export const PrivateRoute = () => {
    const {getToken} = AuthUser(); 
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
}