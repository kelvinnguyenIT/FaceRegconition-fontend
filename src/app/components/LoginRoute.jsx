import React from 'react';
import { Navigate} from 'react-router-dom';
import { Login } from '../containers/Login';
import AuthUser from './AuthUser';

export const LoginRoute = () => {
    const { getToken } = AuthUser(); 
    return getToken() ? <Navigate to="/user" /> : <Login /> 
}