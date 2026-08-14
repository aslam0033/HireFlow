import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    recruiter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    resume:{
        type:String,
        trim:true,
    },
    coverLetter:{
        type:String,
        trim:true,
    },
    status:{
        type:String,
        enum:["applied","shortlisted","rejected","selected"],
        trim:true,
        default:"applied"
    },
},{timestamps:true})

const applicationModel  = mongoose.model("Application",applicationSchema)

export default applicationModel 