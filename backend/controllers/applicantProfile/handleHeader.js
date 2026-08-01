import applicantProfileModel from "../../models/applicantProfile.js"

const handleHeader = async (req,res) => {
    try{
        const {email,name,position,location} = req.body
        
    await applicantProfileModel.findOneAndUpdate({email:email},{name:name,position:position,location:location})
    return res.send({
        message:"header updated successfully"
    })
    }
    catch(e){
        return res.send({
            error:"Something went wrong: please try again later"
        })
    }
}
export default handleHeader