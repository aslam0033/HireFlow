import appliedJobsModel from "../models/appliedJobs.js"

const handleStats = async (req, res) => {
    //     const data = await appliedJobsModel.find({ applicant: userId })
    //   .sort({ appliedAt: -1 })
    //   .limit(5);

    const allData = await appliedJobsModel.find()
    const applications = allData.filter((job)=>job.status == "Applied")
    const interview = allData.filter((job)=>job.status == "Interview")
    const shortlisted = allData.filter((job)=>job.status == "Shortlisted")
    const offer = allData.filter((job)=>job.status == "Offer")
    return res.send({
        applications:applications.length,
        interview:interview.length,
        shortlisted:shortlisted.length,
        offers:offer.length,
    })

}

export default handleStats