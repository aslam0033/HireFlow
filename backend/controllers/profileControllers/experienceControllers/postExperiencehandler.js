import userModel from "../../../models/user.js";

const postExperiencehandler = async (req, res) => {
  try {
    const email = req.user.email
    const {
      position,
      company,
      location,
      startDate,
      jobType,
      endDate,
      isCurrentlyWorking,
      description,
    } = req.body;
    const start = new Date(startDate)
    const end = new Date(endDate)

    let profile = await userModel.findOne({ email: email });
    let years = 0;
    
    let experiences = (profile.experiences)?profile.experiences:[];
    
      const experience = {
        position,
        company,
        location,
        jobType,
        startDate,
        description,
      };

    if (endDate) {
        //years
       years = end.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() &&
    end.getDate() < start.getDate());
      experience.endDate=endDate;
    } 
    else {
       //years calculation
      const today = new Date()
       years = today.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = today.getMonth() < start.getMonth() || (today.getMonth() === start.getMonth() &&
      today.getDate() < start.getDate());

    if(hasnotCompletedyear) years--;
    experience.isCurrentlyWorking=true;
    }
    experience.experienceTime=years,
    experiences.push(experience)
    profile.experiences=experiences
    await profile.save()

    return res.send({
      message: "experience added successfully",
    });
  } catch (e) {
    console.log(e);
    
    return res.send({
      error: "failed"
    });
  }
};
export default postExperiencehandler;
