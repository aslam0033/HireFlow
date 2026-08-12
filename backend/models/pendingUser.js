import mongoose from "mongoose";

const pendingUserSchema = mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    hashedPassword:{
        type:String,
        trim:true,
        required:true
    },
    otpHash:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const pendingUserModel = mongoose.model("pendingUser",pendingUserSchema)

export default pendingUserModel