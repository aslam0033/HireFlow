import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    hashedpassword:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ["applicant", "recruiter"],
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

const userModel = mongoose.model("User",userSchema)

export default userModel