import appliedJobsModel from "../models/appliedJobs.js"

const handleAppliedJobs = async (req, res) => {
    //     const data = await appliedJobsModel.find({ applicant: userId })
    //   .sort({ appliedAt: -1 })
    //   .limit(5);
    const data = await appliedJobsModel.find()
        .sort({ appliedAt: -1 })
        .limit(4);
    return res.send({
        data: data
    })

}

export default handleAppliedJobs