import applicantProfileModel from "../../models/applicantProfile.js";

const handleDeleteExperience = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await applicantProfileModel.findOne({ email: email });

    profile.experiences = profile.experiences.filter((exp)=>exp._id != id)
    
    await profile.save()
      return res.send({
      message:"experience deleted successfully"
    });
  } catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default handleDeleteExperience;
