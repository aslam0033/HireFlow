import applicantProfileModel from "../../models/applicantProfile.js"

const handleSummary = async (req,res) => {
    const {loginEmail,summary} = req.body
    try{
        await applicantProfileModel.findOneAndUpdate({email:loginEmail},{summary:summary})
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