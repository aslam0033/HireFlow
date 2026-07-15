import React from 'react'
import Home from './pages/authentication/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/authentication/Login'
import './index.css'
import Register from './pages/authentication/Register'
import VerifyEmail from './pages/authentication/VerifyEmail'
import ResetPassword from './pages/authentication/ResetPassword'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
