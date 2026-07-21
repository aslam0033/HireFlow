import pendingUserModel from "../models/pendinguser.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const handleRegister = async (req, res) => {
  // getting data from request
  const { fullname, email, password, role } = req.body;

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // validations
  if (!fullname || !email || !password || !role) {
    return res.send({
      error: "Data is missing",
    });
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


  // creating gmail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aslammujawar00033@gmail.com",
      pass: process.env.MAILPASS,
    },
  });

  //generating otp
  const min = Math.pow(10, 5);
  const max = Math.pow(10, 6) - 1;
  let otp = Math.floor(Math.random() * (max - min + 1)) + min;

  let otpExpiry = 0;

  //creating mail options
  const mailOptions = {
    from: "aslammujawar00033@gmail.com",
    to: email,
    subject: "email verification",
    text: otp.toString(),
  };

  // sending otp to the email
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      res.send({
        error: "Something went wrong! Please try agin later",
      });
    } else {
      try {
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);
        otpExpiry = Date.now() + 5 * 60 * 1000;


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
          else{
            await pendingUserModel.create({
          fullname: fullname,
          email: email,
          hashedpassword: hashedPass,
          role: role,
          otp: otp,
          otpExpiry: otpExpiry
        })
          }
          res.send({
          message: "Otp sent successfully",
        });
        }
      catch (e) {
        res.send({
          error: "something went wrong! please try again"
        })
      }
    }
  });

  //trying to find the user with recieved email
  try {
    const user = await pendingUserModel.findOne({ email: email });
    if (user) {
      await pendingUserModel.findByIdAndUpdate(user._id, user)
    }
  } catch (e) {
    return res.send({
      error: "error happened while fetching the user",
    });
  }
};

export default handleRegister;
