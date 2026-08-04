import applicantProfileModel from "../../models/applicantProfile.js"

const handleAddSkill = async (req,res) => {
    try{
        const email = req.user.email
        const {skill} = req.body
        let profile = await applicantProfileModel.findOne({email:email})
        
        let skills = profile.skills
        skills.push(skill)
        await profile.save()
    return res.send({
        message:"skill added successfully"
    })
    }
    catch(e){
        return res.send({
            error:"Something went wrong! please try again later"
        })
    }
}
export default handleAddSkill