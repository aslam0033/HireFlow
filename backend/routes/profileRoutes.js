import express from 'express'
import getProfilehandler from '../controllers/profileControllers/getProfilehandler.js'
import putSummaryhandler from '../controllers/profileControllers/summaryControllers/putSummaryhandler.js'
import deleteSummaryhandler from '../controllers/profileControllers/summaryControllers/deleteSummaryhandler.js'
import postSkillhandler from '../controllers/profileControllers/skillsControllers/postSkillhandler.js'
import deleteSkillhandler from '../controllers/profileControllers/skillsControllers/deleteSkillhandler.js'
import postEducationhandler from '../controllers/profileControllers/educationControllers/postEducationhandler.js'
import putEducationhandler from '../controllers/profileControllers/educationControllers/putEducationhandler.js'
import deleteEducationhandler from '../controllers/profileControllers/educationControllers/deleteEducationhandler.js'
import getediteducationhandler from '../controllers/profileControllers/educationControllers/getediteducationhandler.js'
import postExperiencehandler from '../controllers/profileControllers/experienceControllers/postExperiencehandler.js'
import geteditexperiencehandler from '../controllers/profileControllers/experienceControllers/geteditexperiencehandler.js'
import putExperiencehandler from '../controllers/profileControllers/experienceControllers/putExperiencehandler.js'
import deleteExperiencehandler from '../controllers/profileControllers/experienceControllers/deleteExperiencehandler.js'
import geteditprojecthandler from '../controllers/profileControllers/projectControllers/geteditprojecthandler.js'
import postProjecthandler from '../controllers/profileControllers/projectControllers/postProjecthandler.js'
import putProjecthandler from '../controllers/profileControllers/projectControllers/putProjecthandler.js'
import deleteProjecthandler from '../controllers/profileControllers/projectControllers/deleteProjecthandler.js'
import geteditcertificationhandler from '../controllers/profileControllers/certificationsControllers/geteditcertificationhandler.js'
import postCertificationhandler from '../controllers/profileControllers/certificationsControllers/postCertificationhandler.js'
import putCertificatehandler from '../controllers/profileControllers/certificationsControllers/putCertificatehandler.js'
import deleteCertificaitonhandler from '../controllers/profileControllers/certificationsControllers/deleteCertificaitonhandler.js'

const router = express.Router()
router.get("/",getProfilehandler)

//summary
router.put("/summary",putSummaryhandler)
router.delete("/summary",deleteSummaryhandler)

//skills
router.post("/skills",postSkillhandler)
router.delete("/skills/:skill",deleteSkillhandler)

//education
router.get("/education/:id",getediteducationhandler)
router.post("/education",postEducationhandler)
router.put("/education/:id",putEducationhandler)
router.delete("/education/:id",deleteEducationhandler)

//experiences
router.get("/experience/:id",geteditexperiencehandler)
router.post("/experience",postExperiencehandler)
router.put("/experience/:id",putExperiencehandler)
router.delete("/experience/:id",deleteExperiencehandler)

//projects
router.get("/project/:id",geteditprojecthandler)
router.post("/project",postProjecthandler)
router.put("/project/:id",putProjecthandler)
router.delete("/project/:id",deleteProjecthandler)

//certifications
router.get("/certification/:id",geteditcertificationhandler)
router.post("/certification",postCertificationhandler)
router.put("/certification/:id",putCertificatehandler)
router.delete("/certification/:id",deleteCertificaitonhandler)
export default router