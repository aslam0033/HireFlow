import applicantProfileModel from "../../models/applicantProfile.js";

const handleGetEditProject = async (req, res) => {
  try {
    let id = req.params.id
    let email = req.user.email
    
    let profile = await applicantProfileModel.findOne({ email: email });
    let projects = profile.projects;

    let project = projects.filter((exp)=>exp._id == id)
    return res.send({
      data:project[0]
    });
  } catch (e) {
    console.log(e);
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default handleGetEditProject;
