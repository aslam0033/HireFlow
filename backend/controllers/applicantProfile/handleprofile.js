import jsonwebtoken from 'jsonwebtoken'
import applicantProfileModel from "../../models/applicantProfile.js"

const handleProfile = async (req,res) => {
    const email = req.user.email
        
    try {
        const data = await applicantProfileModel.findOne({ email: email })
        return res.send({
            data: data
        })
    }
    catch (e) {
        res.send({
            error: "something went wrong! please try again"
        })
    }
}

export default handleProfile