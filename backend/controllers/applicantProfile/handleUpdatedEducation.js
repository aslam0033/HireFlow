import applicantProfileModel from "../../models/applicantProfile.js";

const handleUpdatedEducation = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const { degree, institution, startDate, endDate, grade, fieldOfStudy } =
      req.body;

    const profile = await applicantProfileModel.findOne({ email });

    if (!profile) {
      return res.status(404).send({
        error: "Profile not found",
      });
    }

    const education = profile.education.id(id);

    if (!education) {
      return res.status(404).send({
        error: "Education not found",
      });
    }

    // Update the existing subdocument
    education.degree = degree;
    education.institution = institution;
    education.fieldOfStudy = fieldOfStudy;
    education.startDate = startDate;
    education.endDate = endDate;
    education.grade = grade;

    await profile.save();

    return res.send({
      message: "Education updated successfully",
    });
  } catch (e) {
    console.error(e);

    return res.send({
      error: "Failed to update education",
    });
  }
};

export default handleUpdatedEducation;
