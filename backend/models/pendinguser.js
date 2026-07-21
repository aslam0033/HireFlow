import mongoose from "mongoose";

const pendingUserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    hashedpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    otpExpiry:{
        type:String,
        required:true
    },
},{timestapms:true})

const pendingUserModel = mongoose.model("pendingUsers",pendingUserSchema)

export default pendingUserModel