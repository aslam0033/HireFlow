import applicantProfileModel from "../../models/applicantProfile.js";

const handleAppliedJobs = async (req, res) => {
  const email = req.user.email;

  try {
    const profile = await applicantProfileModel
      .findOne({ email })
      .populate("appliedJobs.job");

    if (!profile) {
      return res.status(404).send({
        error: "Applicant profile not found",
      });
    }

    return res.send({
      appliedJobs: profile.appliedJobs,
    });
  } catch (e) {
    return res.status(500).send({
      error: "Something went wrong! Please try again.",
    });
  }
};

export default handleAppliedJobs;