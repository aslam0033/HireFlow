import mongoose from "mongoose";

const appliedJobsSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    company:{
        type:String,
        trim:true,
        required:true
    },
    appliedAt:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    },
})

const appliedJobsModel = mongoose.model('appliedjobs',appliedJobsSchema)

export default appliedJobsModel