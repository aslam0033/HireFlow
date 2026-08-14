import userModel from "../../../models/user.js";

const deleteCertificaitonhandler = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    if(!profile.certifications){
        return res.status(400).send({
            error:"No certifications found"
        })
    }
    profile.certifications = profile.certifications.filter((exp)=>exp._id != id)
    
    await profile.save()
      return res.send({
      message:"Certificate deleted successfully"
    });
  } catch (e) {
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default deleteCertificaitonhandler;
