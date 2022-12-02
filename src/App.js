import './App.css'
import { HomePage } from './app/containers/HomePage'
import 'tw-elements'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './app/containers/Layout'
import { Profile } from './app/containers/MyHome/Profile'
import { EditForm } from './app/containers/MyHome/Profile/EditForm'
import { Summary } from './app/containers/MyHome/Profile/Summary'
import { PrivateRoute } from './app/components/PrivateRoute'
import { LoginRoute } from './app/components/LoginRoute'
import { ModifyPassword } from './app/containers/MyHome/Profile/ModifyPassword'
import { Technology } from './app/containers/Technology'
import { Articles } from './app/containers/Aticles'
import { Contact } from './app/containers/Contact'
import { About } from './app/containers/About'
import { Register } from './app/containers/Register'
import React from 'react'
import { MyHome } from './app/containers/MyHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/user' element={<MyHome />} />
            <Route path='/profile' element={<Profile />}>
              <Route index element={<Summary />} />
              <Route path='/profile/edit' element={<EditForm />} />
              <Route
                path='/profile/change-password'
                element={<ModifyPassword />}
              />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<LoginRoute />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
