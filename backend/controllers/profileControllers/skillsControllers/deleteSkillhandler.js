import userModel from "../../../models/user.js"

const deleteSkillhandler = async (req,res) => {
    try{
        let email = req.user.email
        let skill = req.params.skill
        let profile = await userModel.findOne({email:email})
        
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
export default deleteSkillhandler