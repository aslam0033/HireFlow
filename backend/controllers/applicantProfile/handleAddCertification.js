import applicantProfileModel from "../../models/applicantProfile.js";

const handleAddCertification = async (req, res) => {
  try {
    const email = req.user.email;
    const {
      name,
      issuingOrganization,
      issueDate,
      certificateId,
      certificateUrl,
    } = req.body;

    let profile = await applicantProfileModel.findOne({ email: email });

    let certifications = profile.certifications;
    const certificate = {
      name,
      issueDate,
      issuingOrganization,
      certificateId,
      certificateUrl,
    };
    certifications.push(certificate);
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
export default handleAddCertification;
