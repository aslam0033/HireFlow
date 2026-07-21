import express from 'express'
import handleRegister from './controllers/handleRegister.js';
import 'dotenv/config'
import cors from 'cors'
import dbConnect from './config/db.js';
import handleVerification from './controllers/handleEmailVerification.js';
import handleLogin from './controllers/handleLogin.js';
import cookieParser from 'cookie-parser';
import isLoggedIn from './middleware/login.js';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

dbConnect();
app.post("/register",handleRegister)
app.post("/verify-email",handleVerification)
app.post("/login",handleLogin)
app.listen(3500,()=>{console.log("Server Has been started");})