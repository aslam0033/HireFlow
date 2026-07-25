import jobModel from "../models/job.js"

const handleRecommendedJobs = async (req,res) =>{
    const data = await jobModel.find().limit(3)
    res.send({
        jobs:data
    })
}

export default handleRecommendedJobs;