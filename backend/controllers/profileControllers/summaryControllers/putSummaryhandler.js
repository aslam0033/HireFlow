import userModel from "../../../models/user.js"

const putSummaryhandler = async (req,res) => {
    const email = req.user.email
    const {summary} = req.body
    try{
        await userModel.findOneAndUpdate({email:email},{summary:summary})
    return res.send({
        message:"Summary updated successfully"
    })
    }
    catch(e){
        return res.send({
        error:"Something went wrong! please try again later"
    })
    }
}

export default putSummaryhandler