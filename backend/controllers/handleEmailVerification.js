import pendingUserModel from "../models/pendinguser.js"
import userModel from "../models/user.js"

const handleVerification = async (req, res) => {
    //get data from the request
    const { otp, email } = req.body

    try {
        //find the user
        const user = await pendingUserModel.findOne({ email: email })

        //validations
        if (!user) {
            return res.send({
                error: "User not found! Register and try again"
            })
        }
        if (otp != user.otp) {
            return res.send({
                error: "wrong otp"
            })
        }
        if (Date.now() > user.otpExpiry) {
            return res.send({
                error: "otp is expired! Please request another otp"
            })
        }

        // add the user to database
        const newUser = {
            fullname: user.fullname,
            hashedpassword: user.hashedpassword,
            email: user.email,
            role: user.role,
            isVerified: true
        }
        await userModel.create(newUser)

        // delete from pending user 
        const id = user._id;
        await pendingUserModel.findByIdAndDelete(id);

        //sending the response
        return res.send({
            message: "user created successfully"
        })

    }
    catch (e) {
        console.log(e);

        return res.send({
            error: "Something went wrong! please try again"
        })
    }
}

export default handleVerification