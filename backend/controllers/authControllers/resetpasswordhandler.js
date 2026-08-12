import forgetPasswordModel from "../../models/forgetPassword.js";
import userModel from "../../models/user.js";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const resetpasswordhandler = async (req, res) => {
    //get data 
    const { newPassword, otp } = req.body
    const forgetPassword = req.cookies.forgetPassword;
    
    try {
        const userData = jsonwebtoken.verify(forgetPassword, process.env.SECRETKEY);
        if(!userData.email){
           return res.send({
                error: "Session ended! please request for otp"
            })
        }
        const userExist = await userModel.findOne({ email: userData.email })
        if (!userExist) {
            return res.send({
                error: "user not exist! please register"
            })
        }
        
        if (newPassword.length < 8) {
            return res.send({
                error: "password should contain at least 8 characters",
            });
        }
        // storing the password
        const saltrounds = 10;
        const newHashedPassword = await bcrypt.hash(newPassword,saltrounds)
        const user = await userModel.findOne({email:userData.email})
        user.hashedPassword=newHashedPassword
        await user.save();

        //delete from resetUser
        let usertodelete = await forgetPasswordModel.findOne({email:userData.email})
        const id = usertodelete._id
        await forgetPasswordModel.findByIdAndDelete(id)
        

        return res.send({
            message:"password has been reset successfully"
        })
    }
    catch (e) {
        return res.send({
            error: "password reset failed"
        })
    }
}

export default resetpasswordhandler