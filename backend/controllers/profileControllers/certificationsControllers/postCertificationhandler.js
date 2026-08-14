import userModel from "../../../models/user.js";

const postCertificationhandler = async (req, res) => {
  try {
    const email = req.user.email;
    const {
      name,
      issuingOrganization,
      issueDate,
      expiryDate,
      credentialId,
      credentialUrl,
    } = req.body;

    let profile = await userModel.findOne({ email: email });

    let certifications = (profile.certifications)?profile.certifications:[];
    const certificate = {
      name,
      issueDate,
      issuingOrganization,
      expiryDate,
      credentialId,
      credentialUrl,
    };
    certifications.push(certificate);
    profile.certifications=certifications
    await profile.save();
    return res.send({
      message: "Certificate added successfully",
    });
  } catch (e) {
    return res.send({
      error: "failed",
    });
  }
};
export default postCertificationhandler;
