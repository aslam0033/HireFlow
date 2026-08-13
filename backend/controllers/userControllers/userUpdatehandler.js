import userModel from "../../models/user.js";

const userUpdatehandler = async(req,res)=>{
    const email = req.user.email;
    const {name,contactEmail,profileHeadline,profilePhoto,coverPhoto,location,phone} = req.body;
    try{
        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(400).send({
                error:"User is not registered"
            })
        }
        user.name=name
        user.contactEmail=contactEmail
        user.profileHeadline=profileHeadline
        user.profilePhoto=profilePhoto
        user.coverPhoto=coverPhoto
        user.location=location
        user.phone=phone
        await user.save()
        res.status(200).send({
            message:"personal infrotmation updated successfully"
        })
    }
    catch(e){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}
export default userUpdatehandler