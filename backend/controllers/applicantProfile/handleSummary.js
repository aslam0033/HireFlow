import applicantProfileModel from "../../models/applicantProfile.js"

const handleSummary = async (req,res) => {
    const email = req.user.email
    const {summary} = req.body
    try{
        await applicantProfileModel.findOneAndUpdate({email:email},{summary:summary})
    return res.send({
        message:"Personal Info updated successfully"
    })
    }
    catch(e){
        return res.send({
        error:"Something went wrong! please try again later"
    })
    }
}

export default handleSummary