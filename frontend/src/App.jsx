import React from 'react'
import Home from './pages/authentication/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/authentication/Login'
import './index.css'
import Register from './pages/authentication/Register'
import VerifyEmail from './pages/authentication/VerifyEmail'
import ForgetPassword from './pages/authentication/ForgetPassword'
import ResetPassword from './pages/authentication/ResetPassword'
import Applicant from './pages/ApplicantDashboard/Applicant'
import FindJobs from './pages/ApplicantFuntionalities/FindJobs'
import NavbarLayout from './NavbarLayout'

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
        <Route  element={<NavbarLayout/>}>
          <Route path='/applicant/*' element={<Applicant/>}/>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
