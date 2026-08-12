import express from "express";
import registrationhandler from "../controllers/authControllers/registrationhandler.js";
import emailverificationhandler from "../controllers/authControllers/emailverificationhandler.js";
import loginhandler from "../controllers/authControllers/loginhandler.js";
import logouthandler from "../controllers/authControllers/logouthandler.js";
import forgetpasswordhandler from "../controllers/authControllers/forgetpasswordhandler.js";
import resetpasswordhandler from "../controllers/authControllers/resetpasswordhandler.js";

const router = express.Router();

router.post("/register",registrationhandler);
router.post("/verify-email",emailverificationhandler);
router.post("/login",loginhandler);
router.get("/logout",logouthandler);
router.post("/forgot-password",forgetpasswordhandler);
router.post("/reset-password",resetpasswordhandler);

export default router;