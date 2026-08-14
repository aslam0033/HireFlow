import userModel from "../../../models/user.js";

const putProjecthandler = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const { title, description, startDate, endDate, skills, projectUrl } = req.body;

    const profile = await userModel.findOne({ email });

    if (!profile) {
      return res.status(404).send({
        error: "Profile not found",
      });
    }

    const project = profile.projects.id(id);

    if (!project) {
      return res.status(404).send({
        error: "project not found",
      });
    }

    // Update the existing subdocument
    project.title = title;
    project.description = description;
    project.skills = skills;
    project.startDate = startDate;
    project.projectUrl = projectUrl;

    if(endDate){
        project.endDate = endDate;
        project.isCurrentlyWorking=false
    }
    else{
        project.isCurrentlyWorking=true
    }

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

export default putProjecthandler;
