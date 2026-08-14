import userModel from "../../../models/user.js";

const postProjecthandler = async (req, res) => {
  try{
    const email = req.user.email;
  const { title, description, skills, startDate, endDate, projectUrl } = req.body;

  let profile = await userModel.findOne({ email: email });

  let projects = (profile.projects)?profile.projects:[];
  const study = {
    title,
    description,
    skills,
    startDate,
    projectUrl
  };

  if(endDate){
    study.endDate=endDate;
    study.isCurrentlyWorking=false;
  }
  else{
    study.isCurrentlyWorking=true;
  }
  projects.push(study);
  profile.projects=projects
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
export default postProjecthandler;
