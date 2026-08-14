import userModel from "../../../models/user.js";

const putExperiencehandler = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;
    const {
      position,
      company,
      location,
      startDate,
      jobType,
      endDate,
      description,
    } = req.body;
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = 0;
    let profile = await userModel.findOne({ email: email });
    const experience = profile.experiences.id(id);
    experience.position = position;
    experience.company = company;
    experience.location = location;
    experience.startDate = startDate;
    experience.description = description;
    experience.jobType = jobType;

    if (endDate) {
        years = end.getFullYear() - start.getFullYear();
      const hasnotCompletedyear =
        end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() &&
          end.getDate() < start.getDate());
        if (hasnotCompletedyear) years--;

      experience.endDate = endDate;
      experience.isCurrentlyWorking=false;
    } 
    else {
       const today = new Date();
       years = today.getFullYear() - start.getFullYear();
      const hasnotCompletedyear =
        today.getMonth() < start.getMonth() ||
        (today.getMonth() === start.getMonth() &&
          today.getDate() < start.getDate());

      if (hasnotCompletedyear) years--;

      experience.iscurrentlyWorking = true;
    }
    experience.experienceTime = years;
    await profile.save()

    return res.send({
      message: "experience updated successfully",
    });
  } catch (e) {
    return res.send({
      error: "failed",
    });
  }
};
export default putExperiencehandler;
