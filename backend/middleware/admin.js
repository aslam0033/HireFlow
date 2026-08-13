import jsonwebtoken from 'jsonwebtoken'
import userModel from '../models/user';
const isAdmin = async(req, res, next) => {
  try {
    const email = req.user.email
    const user =  await userModel.findOne({email:email})
    if(user.isAdmin){
        next();
    }
    else{
        return res.status(403).send({
            error:"You are not an Admin"
        })
    }
  } catch (e) {
    return res.send({
      error: "internal server error",
    });
  }
};

export default isAdmin;
