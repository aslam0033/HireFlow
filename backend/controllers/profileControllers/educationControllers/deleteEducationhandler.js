import userModel from "../../../models/user.js";

const deleteEducationhandler = async (req, res) => {
  try {
    let id = req.params.id
    const email= req.user.email
    
    let profile = await userModel.findOne({ email: email });
    if(!profile.education){
      return res.status(404).send({
        error:"education doesn't exists"
      })
    }

    profile.education = profile.education.filter((exp)=>exp._id != id)
    
   await profile.save();
      return res.send({
      message:"Education deleted successfully"
    });
  } 
  catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default deleteEducationhandler;
