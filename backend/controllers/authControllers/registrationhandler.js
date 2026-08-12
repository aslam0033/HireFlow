import pendingUserModel from "../../models/pendingUser.js";
import bcrypt, { hash } from "bcrypt";
import nodemailer from "nodemailer";
import jsonwebtoken from "jsonwebtoken";
import userModel from "../../models/user.js";

const registrationhandler = async (req, res) => {
  // Receive registration data
  const { fullname, email, password } = req.body;

  // email regex
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z]+$/;

  //validations
  if (!fullname || !email || !password) {
    return res.status(400).send({
      error: "Data is missing",
    });
  }
  if (nameRegex.test(fullname)) {
    return res.status(400).send({
      error: "Please enter full name",
    });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).send({
      error: "Invalid Email",
    });
  }
  if (password.length < 8) {
    return res.status(400).send({
      error: "password should contain at least 8 characters",
    });
  }

  //checking whether the user already registered or not
  try {
    const isRegistered = await userModel.findOne({ email: email });
    if (isRegistered) {
      return res.status(400).send({
        error: "user already exists! login to continue",
      });
    }
    //generating otp
    const min = Math.pow(10, 5);
    const max = Math.pow(10, 6) - 1;
    let otp = Math.floor(Math.random() * (max - min + 1)) + min;

    // creating gmail transporter
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
      subject: "email verification",
      text: otp.toString(),
    };

    // saving the data in pending users
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const otpHash = await bcrypt.hash(otp.toString(),saltRounds);
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    //checking whether user already exist in pending list
    const user = await pendingUserModel.findOne({ email: email });
    if (user) {
      user.fullname = fullname;
      user.hashedPassword = hashedPassword;
      user.otpHash = otpHash;
      user.otpExpiry = otpExpiry;
    } else {
      await pendingUserModel.create({
        fullname,
        email,
        hashedPassword,
        otpHash,
        otpExpiry,
      });
    }
    //setting jwt
    //jwt token
    const emailver = jsonwebtoken.sign(
      {
        email: email,
      },
      process.env.SECRETKEY,
      {
        expiresIn: "1h",
      },
    );

    //setting cookie and sending the response
    res.cookie("emailver", emailver, {
      httpOnly: true,
      secure: false,
    });
    // sending the otp to the user
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);

        return res.status(500).json({
          error: "Something went wrong! Please try again later",
        });
      } else {
        return res.status(200).json({
          message: "Otp sent successfully",
        });
      }
    });
  } catch (e) {
    return res.send({
      error: "server error while fetching the user",
    });
  }
};

export default registrationhandler;
