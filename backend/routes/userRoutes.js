import express from 'express'
import userGethandler from '../controllers/userControllers/userGethandler.js';
import userUpdatehandler from '../controllers/userControllers/userUpdatehandler.js';
import userDeletehandler from '../controllers/userControllers/userDeletehandler.js';

const router = express.Router();
router.get("/profile",userGethandler)
router.put("/profile",userUpdatehandler)
router.delete("/profile",userDeletehandler)

export default  router;