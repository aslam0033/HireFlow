import mongoose from "mongoose";

const connectionSchema = mongoose.Schema({
    requester:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected","blocked"],
        default:"pending"
    }
},{timestamps:true})

const connectionModel = mongoose.model("Connection",connectionSchema)

export default connectionModel