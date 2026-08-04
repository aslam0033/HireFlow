import applicantProfileModel from "../../models/applicantProfile.js";

const handleDeleteCertificate = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await applicantProfileModel.findOne({ email: email });

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
export default handleDeleteCertificate;
