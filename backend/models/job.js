import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    company:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    jobType:{
        type:String,
        enum:["full-time","part-time","Internship","Contract"],
        required:true,
        trim:true
    },
    workMode:{
        type:String,
        enum:["Remote","On-site","Hybrid"],
        required:true,
        trim:true
    },
    salary:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    skills:[{
        type:String,
        required:true,
    }],
    responsibilities:[{
        type:String,
        required:true,
    }],
    requirements:[{
        type:String,
        required:true,
    }],
    applicationDeadline:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:["open","closed","draft"],
        default:"open"
    },
    createdBy:{
        type:String,
        // type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
},{timestamps:true})

const jobModel = mongoose.model('jobs',jobSchema)

export default jobModel