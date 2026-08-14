import express from 'express'


import 'dotenv/config'
import cors from 'cors'
import dbConnect from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'  
import profileRoutes from './routes/profileRoutes.js'  
import isLoggedIn from './middleware/login.js';


const app = express()

app.use(express.json())
app.use(cookieParser())
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }))

dbConnect();

app.use("/auth",authRoutes)
app.use("/user",isLoggedIn,userRoutes)
app.use("/profile",isLoggedIn,profileRoutes)
// app.post("/verify-email",handleVerification)
// app.post("/login",handleLogin)
// app.post("/getEmail",handleForgetPassword)
// app.post("/verify-otp",handleResetotp)
// app.post("/reset-password",isOtpVerified,handleResetPassword)
// app.get("/stats",handleStats)
// app.get("/recommendedJobs",handleRecommendedJobs)
// app.get("/applicant-profile",isLoggedIn,handleProfile)
// app.get("/appliedJobs",isLoggedIn,handleAppliedJobs)
// app.post("/edit-header",isLoggedIn,handleHeader)
// app.post("/edit-personalInfo",isLoggedIn,handlePersonalInfo)
// app.post("/edit-professionalSummary",isLoggedIn,handleSummary)
// app.post("/add-skill",isLoggedIn,handleAddSkill)
// app.delete("/delete-skill/:skill",isLoggedIn,handleRemoveSkill)
// // experience
// app.get("/edit-experience/:id",isLoggedIn,handleGetEditExperience)
// app.post("/add-experience",isLoggedIn,handleAddExperience)
// app.put("/update-experience/:id",isLoggedIn,handleUpdateExperience)
// app.delete("/delete-experience/:id",isLoggedIn,handleDeleteExperience)

// //education
// app.get("/edit-education/:id",isLoggedIn,handleGetEditEducation)
// app.post("/add-education",isLoggedIn,handleAddEducation)
// app.put("/edit-education/:id",isLoggedIn,handleUpdatedEducation)
// app.delete("/delete-education/:id",isLoggedIn,handleDeleteEducation)

// //projects
// app.get("/edit-project/:id",isLoggedIn,handleGetEditProject)
// app.post("/add-project",isLoggedIn,handleAddProject)
// app.put("/edit-project/:id",isLoggedIn,handleUpdateProject)
// app.delete("/delete-project/:id",isLoggedIn,handleDeleteProject)

// //certifications
// app.get("/edit-certification/:id",isLoggedIn,handleGetEditCertification)
// app.post("/add-certification",isLoggedIn,handleAddCertification)
// app.put("/edit-certification/:id",isLoggedIn,handleUpdateCertification)
// app.delete("/delete-certificate/:id",isLoggedIn,handleDeleteCertificate)

app.listen(process.env.PORT,()=>{console.log("Server Has been started");})