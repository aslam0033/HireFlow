import userModel from "../../../models/user.js";

const deleteExperiencehandler = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    if(!profile.experiences){
      return res.status(404).send({
        error:"experience doesn't exists"
      })
    }

    profile.experiences = profile.experiences.filter((exp)=>exp._id != id)
    
    await profile.save()
      return res.send({
      message:"experience deleted successfully"
    });
  } catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default deleteExperiencehandler;
