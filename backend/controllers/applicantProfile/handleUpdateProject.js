import applicantProfileModel from "../../models/applicantProfile.js";

const handleUpdateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const { title, description, startDate, endDate, skills, projectUrl } = req.body;

    const profile = await applicantProfileModel.findOne({ email });

    if (!profile) {
      return res.status(404).send({
        error: "Profile not found",
      });
    }

    const project = profile.projects.id(id);

    if (!project) {
      return res.status(404).send({
        error: "Education not found",
      });
    }

    // Update the existing subdocument
    project.title = title;
    project.description = description;
    project.skills = skills;
    project.startDate = startDate;
    project.endDate = endDate;
    project.projectUrl = projectUrl;

    await profile.save();

    return res.send({
      message: "Project updated successfully",
    });
  } catch (e) {
    console.error(e);

    return res.send({
      error: "Failed to update education",
    });
  }
};

export default handleUpdateProject;
