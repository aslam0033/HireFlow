import applicantProfileModel from "../../models/applicantProfile.js";

const handleAddExperience = async (req, res) => {
  try {
    const {
      email,
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

    let experiences = await applicantProfileModel.findOne({ email: email });
    experiences = experiences.experiences;

    if (isWorking) {
      const today = new Date()
      let years = today.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = today.getMonth() < start.getMonth() || (today.getMonth() === start.getMonth() &&
    today.getDate() < start.getDate());
    if(hasnotCompletedyear) years--;
      const experience = {
        position: position,
        company: company,
        location: location,
        jobType: jobType,
        startDate: startDate,
        experienceTime:years,
        currentlyWorking: isWorking,
        description: description,
      };
      experiences.push(experience);
      await applicantProfileModel.findOneAndUpdate(
        { email: email },
        { experiences: experiences },
      );
    } else {
      let years = end.getFullYear() - start.getFullYear();
      const hasnotCompletedyear = end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() &&
    end.getDate() < start.getDate());
      const experience = {
        position: position,
        company: company,
        location: location,
        jobType: jobType,
        currentlyWorking: false,
        startDate: startDate,
        endDate: endDate,
        experienceTime:years,
        description: description,
      };
      experiences.push(experience);
      await applicantProfileModel.findOneAndUpdate(
        { email: email },
        { experiences: experiences },
      );
    }

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
