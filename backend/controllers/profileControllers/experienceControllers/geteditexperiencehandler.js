import userModel from "../../../models/user.js";

const geteditexperiencehandler = async (req, res) => {
  try {
    let id = req.params.id
    let email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    let experiences = profile.experiences;
    if(!experiences){
         return res.status(404).send({
            error:"No experiences exists"
        })
    }

    let experience = experiences.filter((exp)=>exp._id == id)
    return res.send({
      data:experience[0]
    });
  } catch (e) {
    console.log(e);
    
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default geteditexperiencehandler;
