import resetModel from "../models/passwordreset.js";
import userModel from "../models/user.js";
import bcrypt from 'bcrypt'

const handleResetPassword = async (req, res) => {
    //get data 
    const { previousPassword, newPassword, email } = req.body
    const isVerified = req.session.isOtpVerified;
    try {
        //validations
        if(!isVerified){
            return res.send({
                error:"otp verification needed"
            })
        }
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.send({
                error: "User doesn't exist! Please register"
            })
        }
        
        const isMatch = await bcrypt.compare(previousPassword,user.hashedpassword);
        if (!isMatch) {
            return res.send({
                error: "wrong password"
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
        await userModel.findByIdAndUpdate(user._id,{hashedpassword:newHashedPassword},{new:true})

        //delete from resetUser
        let resetUser = await resetModel.findOne({email:email})
        let id = resetUser._id
        await resetModel.findByIdAndDelete(id);

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

export default handleResetPassword