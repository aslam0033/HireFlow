import mongoose  from "mongoose";

const resetSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    otpExpiry:{
        type:Date,
        required:true
    }
})

const resetModel = mongoose.model("passreset",resetSchema)

export default resetModel