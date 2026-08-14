import userModel from "../../models/user.js"

const getProfilehandler = async (req,res) => {
    const email = req.user.email
        
    try {
        const user = await userModel.findOne({ email: email })
        const data = {
            summary:user.summary,
            skills:user.skills,
            education:user.education,
            experiences:user.experiences,
            projects:user.projects,
            certifications:user.certifications,
            savedJobs:user.savedJobs,
            socialLinks:user.socialLinks,
            appliedJobs:user.appliedJobs,
        }
        return res.status(200).send({
            data:data
        })
    }
    catch (e) {
        res.status(500).send({
            error: "something went wrong! please try again"
        })
    }
}

export default getProfilehandler