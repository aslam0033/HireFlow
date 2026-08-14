import userModel from '../../../models/user.js'

const geteditcertificationhandler = async (req, res) => {
  try {
    let id = req.params.id
    const email = req.user.email
    
    let profile = await userModel.findOne({ email: email });
    let certifications = profile.certifications;
    if(!certifications){
        return res.status(400).send({
            error:"No certifications found"
        })
    }

    let certificates = certifications.filter((cert) => cert._id == id)
    
      return res.send({
      data:certificates[0]
    });
  } 
  catch (e) {
    return res.send({
      error: "something went wrong! please try again later"
    });
  }
};
export default geteditcertificationhandler;
