import userModel from "../../models/user.js";

const userGethandler = async(req,res)=>{
    const email = req.user.email;
    try{
        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(400).send({
                error:"User is not registered"
            })
        }
        const userData = {
            name:user.name,
            contactEmail:user.contactEmail,
            profileHeadline:user.profileHeadline,
            profilePhoto:user.profilePhoto,
            coverPhoto:user.coverPhoto,
            location:user.location,
            phone:user.phone,
            followers:user.followers
        }
        res.status(200).send({
            data:userData
        })
    }
    catch(e){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}
export default userGethandler