import applicantProfileModel from "../../models/applicantProfile.js";

const handleAddProject = async (req, res) => {
  try{
    const email = req.user.email;
  const { title, description, skills, startDate, endDate, projectUrl } = req.body;

  let profile = await applicantProfileModel.findOne({ email: email });

  let projects = profile.projects;
  const study = {
    title,
    description,
    skills,
    startDate,
    endDate,
    projectUrl
  };
  projects.push(study);

  await profile.save();
  return res.send({
    message: "project added successfully",
  });
  }
    catch (e) {
      return res.send({
        error: "failed"
      });
    }
};
export default handleAddProject;
