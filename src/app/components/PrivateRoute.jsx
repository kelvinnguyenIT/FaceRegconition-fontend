import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import state from '../utils/localStorage'

export const PrivateRoute = () => {
  const token = state.getToken()
  return token ? <Outlet /> : <Navigate to='/login' />
}
