import React from 'react'
import Home from './pages/authentication/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/authentication/Login'
import './index.css'
import Register from './pages/authentication/Register'
import VerifyEmail from './pages/authentication/VerifyEmail'
import ForgetPassword from './pages/authentication/ForgetPassword'
import ApplicantProfile from './pages/applicant/ApplicantProfile'
import ResetPassword from './pages/authentication/ResetPassword'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/profile' element={<ApplicantProfile/>}/>
      </Routes>
    </div>
  )
}

export default App
