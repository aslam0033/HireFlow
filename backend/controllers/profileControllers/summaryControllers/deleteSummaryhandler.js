import userModel from "../../../models/user.js"

const deleteSummaryhandler = async (req,res) => {
    const email = req.user.email
    try{
        const user =await userModel.findOne({email:email})
        const id = user._id
        await userModel.findByIdAndUpdate(
            id,
            { $unset: { summary: "" } }, // The value can be "" or 1; MongoDB ignores it
            { new: true } // Returns the modified document instead of the old one
        );
    return res.send({
        message:"Summary deleted successfully"
    })
    }
    catch(e){
        return res.send({
        error:"Something went wrong! please try again later"
    })
    }
}

export default deleteSummaryhandler