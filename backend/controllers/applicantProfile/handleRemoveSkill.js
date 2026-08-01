import applicantProfileModel from "../../models/applicantProfile.js"

const handleRemoveSkill = async (req,res) => {
    try{
        const {email,skill} = req.body
        let skills = await applicantProfileModel.findOne({email:email})
        
        skills = skills.skills
        skills = skills.filter((s)=> s != skill)
         await applicantProfileModel.findOneAndUpdate({email:email},{skills:skills})
    return res.send({
        message:"skill removed successfully"
    })
    }
    catch(e){
        return res.send({
            error:"Something went wrong! please try again later"
        })
    }
}
export default handleRemoveSkill