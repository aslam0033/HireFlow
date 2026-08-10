import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        trim:true
    },
    media:[{
        name:{
            type:String,
            trim:true
        },
        url:{
            type:String,
            trim:true
        },
    }],
    likes:[{
        ype:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
},{timestamps:true})

const postModel = mongoose.model("Post",postSchema)

export default postModel