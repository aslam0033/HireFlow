import express from 'express'
import handleRegister from './controllers/handleRegister.js';
import 'dotenv/config'
import cors from 'cors'
import dbConnect from './config/db.js';
import handleVerification from './controllers/handleEmailVerification.js';
import handleLogin from './controllers/handleLogin.js';
import cookieParser from 'cookie-parser';
import handleResetotp from './controllers/handleResetotp.js';
import handleForgetPassword from './controllers/handleForgetPassword.js';
import handleResetPassword from './controllers/handleResetPassword.js';
import isOtpVerified from './middleware/resetPass.js';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

dbConnect();
app.post("/register",handleRegister)
app.post("/verify-email",handleVerification)
app.post("/login",handleLogin)
app.post("/getEmail",handleForgetPassword)
app.post("/verify-otp",handleResetotp)
app.post("/reset-password",isOtpVerified,handleResetPassword)
app.listen(process.env.PORT,()=>{console.log("Server Has been started");})