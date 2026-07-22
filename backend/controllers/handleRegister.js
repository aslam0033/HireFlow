import pendingUserModel from "../models/pendinguser.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import userModel from "../models/user.js";

const handleRegister = async (req, res) => {

  // Receive registration data
  const { fullname, email, password, role } = req.body;

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //validations
  if (!fullname || !email || !password || !role) {
    return res.send({
      error: "Data is missing"
    })
  }
  if (fullname.trim().length == 0) {
    return res.send({
      error: "Name cannot be empty",
    });
  }
  if (!emailRegex.test(email)) {
    return res.send({
      error: "Invalid Email",
    });
  }
  if (password.length < 8) {
    return res.send({
      error: "password should contain at least 8 characters",
    });
  }
  if (role !== "applicant" && role !== "recruiter") {
    return res.send({
      error: "Invalid role",
    });
  }

  //checking whether the user already registered or not
  try{
    const isRegistered = await userModel.findOne({email:email})
    if(isRegistered){
      return res.send({
        error:"user already exists! login to continue"
      })
    }
  }
  catch(e){
    return res.send({
      error:"server error while fetching the user"
    })
  }

  //generating otp
  const min = Math.pow(10, 5);
  const max = Math.pow(10, 6) - 1;
  let otp = Math.floor(Math.random() * (max - min + 1)) + min;


  // creating gmail transporter
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
    subject: "email verification",
    text: otp.toString(),
  };

  // saving the data in pending users
  try {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000)
    //checking whether user already exist in pending list
    const user = await pendingUserModel.findOne({ email: email });
    if (user) {
      await pendingUserModel.findByIdAndUpdate(user._id, {
        fullname: fullname,
        email: email,
        hashedpassword: hashedPass,
        role: role,
        otp: otp,
        otpExpiry: otpExpiry

      })
    }
    else {
      await pendingUserModel.create({
        fullname: fullname,
        email: email,
        hashedpassword: hashedPass,
        role: role,
        otp: otp,
        otpExpiry: otpExpiry
      })
    }

    // sending the otp to the user
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send({
        error: "Something went wrong! Please try again later",
      });
    } else {
      return res.send({
          message: "Otp sent successfully",
        });
    }
    }
  );
  }
  catch(e){
    return res.send({
      error:"Internal server error please try agian later"
    })
  }
};

export default handleRegister;
