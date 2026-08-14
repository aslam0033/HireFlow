import userModel from "../../../models/user.js"

const postSkillhandler = async (req,res) => {
    try{
        const email = req.user.email
        const {skill} = req.body
        let profile = await userModel.findOne({email:email})
        let skills = (profile.skills)?profile.skills:[]
        let isExists = false
        skills.map((s)=>{
            if(skill == s){
                isExists=true
            }
        })
        if(isExists){
            return res.status(400).send({
                error:"skill already exists"
            })
        }
        skills.push(skill)
        profile.skills=skills
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
export default postSkillhandler