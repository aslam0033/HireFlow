import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true
        },

        commentedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;