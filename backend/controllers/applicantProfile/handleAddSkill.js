import applicantProfileModel from "../../models/applicantProfile.js"

const handleAddSkill = async (req,res) => {
    try{
        const {email,skill} = req.body
        let skills = await applicantProfileModel.findOne({email:email})
        
        skills = skills.skills
        skills.push(skill)
         await applicantProfileModel.findOneAndUpdate({email:email},{skills:skills})
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