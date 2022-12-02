import React from 'react'
import { Navigate } from 'react-router-dom'
import { Login } from '../containers/Login'
import state from '../utils/localStorage'

export const LoginRoute = () => {
  const token = state.getToken()
  return token ? <Navigate to='/user' /> : <Login />
}
