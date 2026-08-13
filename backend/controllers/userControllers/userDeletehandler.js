import userModel from "../../models/user.js"

const userDeletehandler = async(req,res) =>{
    const email = req.user.email
    try{
        const user = await userModel.findOne({email:email});
        const id = user._id
        await userModel.findByIdAndDelete(id)
        res.status(200).send({
            message:"Account deleted successfully"
        })
    }
    catch(e){
        res.status(500).send({
            error:"Internal server error while deleting the account! please try again later"
        })
    }
}
export default userDeletehandler