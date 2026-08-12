import mongoose from "mongoose";

const forgetPasswordSchema = mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    hashOtp:{
        type:String,
        trim:true,
        required:true
    },
    otpExpiry:{
        type:Date
    }
})
const forgetPasswordModel = mongoose.model("forgetPassword",forgetPasswordSchema)
export default forgetPasswordModel