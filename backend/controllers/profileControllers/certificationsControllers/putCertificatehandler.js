import userModel from "../../../models/user.js";

const putCertificatehandler = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const {
      name,
      issuingOrganization,
      issueDate,
      credentialId,
      credentialUrl,
    } = req.body;

    const profile = await userModel.findOne({ email });

    if (!profile) {
      return res.status(404).send({
        error: "Profile not found",
      });
    }

    const certificate = profile.certifications.id(id);

    if (!certificate) {
      return res.status(404).send({
        error: "certificate not found",
      });
    }

    // Update the existing subdocument
    certificate.name = name;
    certificate.issuingOrganization = issuingOrganization;
    certificate.issueDate = issueDate;
    certificate.credentialId = credentialId;
    certificate.credentialUrl = credentialUrl;

    await profile.save();

    return res.send({
      message: "Certification updated successfully",
    });
  } catch (e) {
    console.error(e);

    return res.send({
      error: "Failed to update certification",
    });
  }
};

export default putCertificatehandler;