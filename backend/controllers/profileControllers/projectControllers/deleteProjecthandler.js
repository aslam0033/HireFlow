import userModel from "../../../models/user.js";

const deleteProjecthandler = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    if(!profile.projects){
      return res.status(404).send({
        error:"project doesn't exists"
      })
    }

    profile.projects = profile.projects.filter((exp)=>exp._id != id)
    
    await profile.save()
      return res.send({
      message:"Project deleted successfully"
    });
  } catch (e) {
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default deleteProjecthandler;
