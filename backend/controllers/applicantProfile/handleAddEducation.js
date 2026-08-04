import applicantProfileModel from "../../models/applicantProfile.js";

const handleAddEducation = async (req, res) => {
  try {
    const email = req.user.email;
    const { degree, institution, fieldOfStudy, startDate, endDate, grade } =
      req.body;
    const start = new Date(startDate);
    const end = new Date(endDate);

    let profile = await applicantProfileModel.findOne({ email: email });

    let education = profile.education;
    const study = {
      degree,
      institution,
      fieldOfStudy,
      startDate,
      endDate,
      grade,
    };
    education.push(study);
    await profile.save();
    return res.send({
      message: "education added successfully",
    });
  } catch (e) {
    console.log(e);

    return res.send({
      error: "failed",
    });
  }
};
export default handleAddEducation;
