import forgetPasswordModel from "../../models/forgetPassword.js";
import userModel from "../../models/user.js";
import nodemailer from "nodemailer";
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const forgetpasswordhandler = async (req, res) => {
  // getting the data
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.send({
        error: "The user is not registered!",
      });
    }
    //generating otp
    const min = Math.pow(10, 5);
    const max = Math.pow(10, 6) - 1;
    let otp = Math.floor(Math.random() * (max - min + 1)) + min;

    //mail preperation
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAILPASS,
      },
    });

    //creating mail options
    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "email verification to reset the password",
      text: otp.toString(),
    };

    //store the otp
    let isExists = await forgetPasswordModel.findOne({ email: email });
    let hashOtp = await bcrypt.hash(otp.toString(),10);
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    if (isExists) {
      await forgetPasswordModel.findByIdAndUpdate(isExists._id, {
        email,
        hashOtp,
        otpExpiry
      });
    } else {
      await forgetPasswordModel.create({
        email,
        hashOtp,
        otpExpiry
      });
    }
    //token
    const forgetPassword = jsonwebtoken.sign(
      {
        email:email
      },
      process.env.SECRETKEY,
      {
        expiresIn: "2m",
      },
    );
    res.cookie("forgetPassword", forgetPassword, {
      httpOnly: true,
      secure: false,
    });

    //send the otp
    await transporter.sendMail(mailOptions);
    return res.send({
      message: "OTP sent successfully",
    });
  } catch (e) {
    res.send({
      error: "Something went wrong! please try again later",
    });
  }
};

export default forgetpasswordhandler;
