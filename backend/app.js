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
import handleUpdateExperience from './controllers/applicantProfile/handleUpdateExperience';
import handleDeleteExperience from './controllers/applicantProfile/handleDeleteExperience.js';
import isLoggedIn from './middleware/login.js';
import handleAddEducation from './controllers/applicantProfile/handleAddEducation.js';
import handleGetEditEducation from './controllers/applicantProfile/handleGetEditEducation.js';
import handleUpdatedEducation from './controllers/applicantProfile/handleUpdatedEducation.js';
import handleDeleteEducation from './controllers/applicantProfile/handleDeleteEducation.js';
import handleAddProject from './controllers/applicantProfile/handleAddProject.js';
import handleGetEditProject from './controllers/applicantProfile/handleGetEditProject.js';
import handleUpdateProject from './controllers/applicantProfile/handleUpdateProject.js';
import handleDeleteProject from './controllers/applicantProfile/handleDeleteProject.js';
import handleAddCertification from './controllers/applicantProfile/handleAddCertification.js';
import handleGetEditCertification from './controllers/applicantProfile/handleGetEditCertification.js';
import handleUpdateCertification from './controllers/applicantProfile/handleUpdateCertification.js';
import handleDeleteCertificate from './controllers/applicantProfile/handleDeleteCertificate.js';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

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
app.get("/applicant-profile",isLoggedIn,handleProfile)
app.post("/edit-header",isLoggedIn,handleHeader)
app.post("/edit-personalInfo",isLoggedIn,handlePersonalInfo)
app.post("/edit-professionalSummary",isLoggedIn,handleSummary)
app.post("/add-skill",isLoggedIn,handleAddSkill)
app.delete("/delete-skill/:skill",isLoggedIn,handleRemoveSkill)
// experience
app.get("/edit-experience/:id",isLoggedIn,handleGetEditExperience)
app.post("/add-experience",isLoggedIn,handleAddExperience)
app.put("/update-experience/:id",isLoggedIn,handleUpdateExperience)
app.delete("/delete-experience/:id",isLoggedIn,handleDeleteExperience)

//education
app.get("/edit-education/:id",isLoggedIn,handleGetEditEducation)
app.post("/add-education",isLoggedIn,handleAddEducation)
app.put("/edit-education/:id",isLoggedIn,handleUpdatedEducation)
app.delete("/delete-education/:id",isLoggedIn,handleDeleteEducation)

//projects
app.get("/edit-project/:id",isLoggedIn,handleGetEditProject)
app.post("/add-project",isLoggedIn,handleAddProject)
app.put("/edit-project/:id",isLoggedIn,handleUpdateProject)
app.delete("/delete-project/:id",isLoggedIn,handleDeleteProject)

//certifications
app.get("/edit-certification/:id",isLoggedIn,handleGetEditCertification)
app.post("/add-certification",isLoggedIn,handleAddCertification)
app.put("/edit-certification/:id",isLoggedIn,handleUpdateCertification)
app.delete("/delete-certificate/:id",isLoggedIn,handleDeleteCertificate)

app.listen(process.env.PORT,()=>{console.log("Server Has been started");})