import applicantProfileModel from "../../models/applicantProfile.js";

const handleGetEditCertification = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await applicantProfileModel.findOne({ email: email });
    let certifications = profile.certifications;
    

    let certificates = certifications.filter((cert) => cert._id == id)
    
      return res.send({
      data:certificates[0]
    });
  } 
  catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default handleGetEditCertification;
