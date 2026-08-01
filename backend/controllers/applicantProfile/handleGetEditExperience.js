import applicantProfileModel from "../../models/applicantProfile.js";

const handleGetEditExperience = async (req, res) => {
  try {
    let id = req.params.id
    const {email} = req.body
    
    let experiences = await applicantProfileModel.findOne({ email: email });
    experiences = experiences.experiences;

    let experience = experiences.filter((exp)=>exp._id == id)
    return res.send({
      data:experience[0]
    });
  } catch (e) {
    console.log(e);
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default handleGetEditExperience;
