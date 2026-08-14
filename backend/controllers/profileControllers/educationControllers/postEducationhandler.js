import userModel from "../../../models/user.js";

const postEducationhandler = async (req, res) => {
  try {
    const email = req.user.email;
    const { qualification, institution, fieldOfStudy, startYear, endYear, grade } =
      req.body;

    let profile = await userModel.findOne({ email: email });

    let education = (profile.education)?profile.education:[];
    const study = {
      qualification,
      institution,
      fieldOfStudy,
      startYear,
      endYear,
      grade,
    };
    education.push(study);
    profile.education=education
    await profile.save()
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
export default postEducationhandler;
