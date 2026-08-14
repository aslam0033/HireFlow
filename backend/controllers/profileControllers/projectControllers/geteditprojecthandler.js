import userModel from "../../../models/user.js";

const geteditprojecthandler = async (req, res) => {
  try {
    let id = req.params.id
    let email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    let projects = profile.projects;
    if(!projects){
         return res.status(404).send({
            error:"No projects exists"
        })
    }

    let project = projects.filter((exp)=>exp._id == id)
    return res.send({
      data:project[0]
    });
  } catch (e) {
    console.log(e);
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default geteditprojecthandler;
