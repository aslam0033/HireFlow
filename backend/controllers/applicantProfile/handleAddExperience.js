import applicantProfileModel from "../../models/applicantProfile.js";

const handleAddExperience = async (req, res) => {
  try {
    const email = req.user.email
    const {
      position,
      company,
      location,
      startDate,
      jobType,
      endDate,
      isWorking,
      description,
    } = req.body;
    const start = new Date(startDate)
    const end = new Date(endDate)

    let profile = await applicantProfileModel.findOne({ email: email });
    let years = 0;
    
    let experiences = profile.experiences;
    
      const experience = {
        position: position,
        company: company,
        location: location,
        jobType: jobType,
        startDate: startDate,
        description: description,
      };

    if (isWorking) {
      //years calculation
      const today = new Date()
       years = today.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = today.getMonth() < start.getMonth() || (today.getMonth() === start.getMonth() &&
      today.getDate() < start.getDate());

    if(hasnotCompletedyear) years--;
    experience.currentlyWorking=isWorking;
    } 
    else {
      //years
       years = end.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() &&
    end.getDate() < start.getDate());

      experience.endDate=endDate;
    }
    experience.experienceTime=years,
    experiences.push(experience)
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
export default handleAddExperience;
