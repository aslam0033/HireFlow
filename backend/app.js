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
import handleAppliedJobs from './controllers/handleAppliedJobs.js';
import handleStats from './controllers/handleStats.js';
import handleRecommendedJobs from './controllers/handleRecommendedJobs.js';
import handleHeader from './controllers/applicantProfile/handleHeader.js';
import handleProfile from './controllers/applicantProfile/handleprofile.js';
import handlePersonalInfo from './controllers/applicantProfile/handlePersonlInfo.js';
import handleSummary from './controllers/applicantProfile/handleSummary.js';
import handleAddSkill from './controllers/applicantProfile/handleAddSkill.js';
import handleRemoveSkill from './controllers/applicantProfile/handleRemoveSkill.js';
import handleAddExperience from './controllers/applicantProfile/handleAddExperience.js';
import handleGetEditExperience from './controllers/applicantProfile/handleGetEditExperience.js';

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
app.get("/appliedJobs",handleAppliedJobs)
app.get("/stats",handleStats)
app.get("/recommendedJobs",handleRecommendedJobs)
app.post("/applicant-profile",handleProfile)
app.post("/edit-header",handleHeader)
app.post("/edit-personalInfo",handlePersonalInfo)
app.post("/edit-professionalSummary",handleSummary)
app.post("/add-skill",handleAddSkill)
app.delete("/delete-skill",handleRemoveSkill)
app.post("/add-experience",handleAddExperience)
app.post("/edit-experience/:id",handleGetEditExperience)
app.listen(process.env.PORT,()=>{console.log("Server Has been started");})