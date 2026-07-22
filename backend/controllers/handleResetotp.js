import resetModel from "../models/passwordreset.js";
import jsonwebtoken from 'jsonwebtoken'

const handleResetotp = async (req, res) => {
    //get data
    const { email, otp } = req.body
    try {
        const user = await resetModel.findOne({ email: email })

        //validations
        if (!user) {
            return res.send({
                error: "User not found! please request for otp with registered gmail"
            })
        }
        if (Date.now() > user.otpExpiry) {
            return res.send({
                error: "otp has been expired"
            })
        }
        if (user.otp != otp) {
            return res.send({
                error: "invalid otp"
            })
        }
        const isOtpVerified = jsonwebtoken.sign(
            {
                otp:otp
            },
            process.env.SECRETKEY,
            {
                expiresIn: "2m"
            }
        )
        res.cookie("isOtpVerified", isOtpVerified, {
            httpOnly: true,
            secure:false
        })
        return res.send({
            message: "otp verification is successfull"
        })
    }
    catch (e) {
        return res.send({
            error: "Something went wrong please try again later"
        })
    }
}

export default handleResetotp