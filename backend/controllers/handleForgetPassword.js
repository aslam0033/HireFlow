import resetModel from "../models/passwordreset.js";
import userModel from "../models/user.js";
import nodemailer from 'nodemailer'

const handleForgetPassword = async (req, res) => {
    // getting the data
    const { email } = req.body
    try {
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.send({
                error: "The user is not registered!"
            })
        }
        //generating otp
        const min = Math.pow(10, 5);
        const max = Math.pow(10, 6) - 1;
        let otp = Math.floor(Math.random() * (max - min + 1)) + min;

        //mail preperation
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "aslammujawar00033@gmail.com",
                pass: process.env.MAILPASS,
            },
        });

        //creating mail options
        const mailOptions = {
            from: "aslammujawar00033@gmail.com",
            to: email,
            subject: "email verification to reset the password",
            text: otp.toString(),
        };

        //store the otp
        let isExists = await resetModel.findOne({ email: email })
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
        if (isExists) {
            await resetModel.findByIdAndUpdate(isExists._id, {
                email: email,
                otp: otp,
                otpExpiry: otpExpiry
            })
        }
        else {
            await resetModel.create({
                email: email,
                otp: otp,
                otpExpiry: otpExpiry
            })
        }

        //send the otp
         await transporter.sendMail(mailOptions)
            return res.send({
                message: "OTP sent successfully"
            })
    }
    catch (e) {
        res.send({
            error: "Something went wrong! please try again later"
        })
    }
}

export default handleForgetPassword