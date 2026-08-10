import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    permissions:[{
        type:String,
        trim:true,
    }],
    status:{
        type:String,
        enum:["active","suspended"],
        default:"active",
        trim:true,
    }
},{timestamps:true})

const adminModel = mongoose.model("Admin",adminSchema)
