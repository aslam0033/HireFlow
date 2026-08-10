import mongoose from "mongoose";

const companyMembershipSchema = mongoose.Schema({
    member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    role:{
        type:String,
        enum:["owner","admin","recruiter","employee"],
        default:"employee"
    },
    status:{
        type:String,
        enum:["pending","active","removed"],
        default:"pending"
    },
    permissions:[{
        type:String,
        trim:true
    }],
    joinedDate:{
        type:Date
    }
},{timestamps:true})

const companyMembershipModel = mongoose.model("CompanyMembership",companyMembershipSchema)
export default companyMembershipModel