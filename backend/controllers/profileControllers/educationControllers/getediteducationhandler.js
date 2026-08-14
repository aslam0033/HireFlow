import userModel from "../../../models/user.js";

const getediteducationhandler = async (req, res) => {
  try {
    let id = req.params.id
    let email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    let education = profile.education;
    if(!education){
      return res.status(404).send({
        error:"no education exists"
      })
    }
    let degree = education.filter((exp)=>exp._id == id)
    return res.send({
      data:degree[0]
    });
  } catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default getediteducationhandler;
