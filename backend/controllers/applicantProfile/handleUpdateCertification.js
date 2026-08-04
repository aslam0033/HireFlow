import applicantProfileModel from "../../models/applicantProfile.js";

const handleUpdateCertification = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.user.email;

    const {
      name,
      issuingOrganization,
      issueDate,
      certificateId,
      certificateUrl,
    } = req.body;

    const profile = await applicantProfileModel.findOne({ email });

    if (!profile) {
      return res.status(404).send({
        error: "Profile not found",
      });
    }

    const certificate = profile.certifications.id(id);

    if (!certificate) {
      return res.status(404).send({
        error: "Education not found",
      });
    }

    // Update the existing subdocument
    certificate.name = name;
    certificate.issuingOrganization = issuingOrganization;
    certificate.issueDate = issueDate;
    certificate.certificateId = certificateId;
    certificate.certificateUrl = certificateUrl;

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

export default handleUpdateCertification;