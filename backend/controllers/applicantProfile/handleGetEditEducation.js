import applicantProfileModel from "../../models/applicantProfile.js";

const handleGetEditEducation = async (req, res) => {
  try {
    let id = req.params.id
    let email = req.user.email
    
    let profile = await applicantProfileModel.findOne({ email: email });
    let education = profile.education;

    let degree = education.filter((exp)=>exp._id == id)
    return res.send({
      data:degree[0]
    });
  } catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default handleGetEditEducation;
