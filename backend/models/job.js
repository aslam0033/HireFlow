import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true,
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    employmentType:{
        type:String,
        enum:["full-time","part-time","internship","contract"],
        trim:true
    },
    workMode:{
        type:String,
        enum:["remote","on-site","hybrid"],
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    experienceRequired:{
        type:String,
        trim:true
    },
    skills:[{
        type:String,
        trim:true
    }],
    salaryRange:{
        type:String,
        trim:true
    },
    applicationDeadline:{
        type:Date
    },
    status:{
        type:String,
        enum:["open","draft","closed"],
        trim:true,
        default:"open"
    }
},{timestamps:true})

const jobModel = mongoose.model("Job",jobSchema)

export default jobModel