import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './client/pages/Home'
import Login from "./client/pages/Login"
import Signup from "./client/pages/Signup"
import Dashboard from './admin/pages/Dashboard'
import Create from './admin/pages/Create'
import Leads from './admin/pages/Leads'
import Analytics from './admin/pages/Analytics'
import Files from './admin/pages/Files'
import Users from './admin/pages/Users'
import Setting from './admin/pages/Setting'
import Help from './admin/pages/Help'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} ></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='Signup' element={<Signup />} ></Route>
        <Route path='Dashboard' element={<Dashboard />} >
          <Route path='' element={<Analytics />} />
          <Route path='create' element={<Create />} />
          <Route path='leads' element={<Leads />} >
            <Route path='*' ></Route>
          </Route>
          <Route path='files' element={<Files />} />
          <Route path='users' element={<Users />} />
          <Route path='setting' element={<Setting />} />
          <Route path='help' element={<Help />} />
          {/* comment */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App