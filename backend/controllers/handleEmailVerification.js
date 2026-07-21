import pendingUserModel from "../models/pendinguser.js"
import userModel from "../models/user.js"

const handleVerification = async(req,res)=>{
    //get data from the request
    const {otp,email} = req.body

    //find the user
    const user = await pendingUserModel.findOne({email:email})

    //validations
    if(!user){
        return res.send({
            error:"User not found! Register and try again"
        })
    }
    if(otp != user.otp){
        return res.send({
            error:"wrong otp"
        })
    }
    const id = user._id;
    if(Date.now() > user.otpExpiry){
        // delete from pending user and send response
        await pendingUserModel.findByIdAndDelete(id);
        return res.send({
            error:"otp is expired"
        })
    }
    await pendingUserModel.findByIdAndDelete(id);
    try{

        

        // delete from pending user 
    
    // add the user to database
    const newUser = {
        fullname : user.fullname,
        hashedpassword : user.hashedpassword,
        email : user.email,
        role : user.role,
        isVerified : true
    }
    await userModel.create(newUser)
    res.send({
        message:"user created successfully"
    })
    }
    catch(e){
        console.log(e);
        
        return res.send({
            error:"Internal server error! please try again"
        })
    }

    
}

export default handleVerification