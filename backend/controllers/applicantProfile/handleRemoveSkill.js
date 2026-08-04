import applicantProfileModel from "../../models/applicantProfile.js"

const handleRemoveSkill = async (req,res) => {
    try{
        let email = req.user.email
        let skill = req.params.skill
        let profile = await applicantProfileModel.findOne({email:email})
        
        profile.skills = profile.skills.filter((s)=> s != skill)
        await profile.save()

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