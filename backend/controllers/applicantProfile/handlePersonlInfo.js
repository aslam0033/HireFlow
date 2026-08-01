import applicantProfileModel from "../../models/applicantProfile.js"

const handlePersonalInfo = async (req,res) => {
    const {loginEmail,email,phone,location} = req.body
    try{
        await applicantProfileModel.findOneAndUpdate({email:loginEmail},{contactEmail:email,phone:phone,location:location})
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

export default handlePersonalInfo