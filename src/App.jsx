import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './client/pages/Home'
import Login from "./client/pages/Login"
import Signup from "./client/pages/Signup"
import Dashboard from './admin/pages/Dashboard'
import Create from './admin/pages/Create'
import Analytics from './admin/pages/Analytics'
import Files from './admin/pages/Files'
import Users from './admin/pages/Users'
import Setting from './admin/pages/Setting'
import Help from './admin/pages/Help'
import ClientDashboard from './client/pages/ClientDashboard'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} ></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='Signup' element={<Signup />} ></Route>
        <Route path='admin' element={<Dashboard />} >
          <Route path='' element={<Analytics />} />
          <Route path='create' element={<Create />} />
          <Route path='files' element={<Files />} />
          <Route path='users' element={<Users />} />
          <Route path='setting' element={<Setting />} />
          <Route path='help' element={<Help />} />
        </Route>
        <Route path='dashboard' element={<ClientDashboard />} >
          <Route path='' element={<Analytics />} />
          <Route path='create' element={<Create />} />
          <Route path='files' element={<Files />} />
          <Route path='users' element={<Users />} />
          <Route path='setting' element={<Setting />} />
          <Route path='help' element={<Help />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App