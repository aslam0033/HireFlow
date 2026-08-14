import userModel from "../../../models/user.js";

const putEducationhandler = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const { qualification, institution, fieldOfStudy, startYear, endYear, grade } =
      req.body;

    const profile = await userModel.findOne({ email });

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
    education.qualification = qualification;
    education.institution = institution;
    education.fieldOfStudy = fieldOfStudy;
    education.startYear = startYear;
    education.endYear = endYear;
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

export default putEducationhandler;
