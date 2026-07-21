import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const handleLogin = async(req,res) =>{
    // getting data from request
    const {email,password} = req.body
    let user = undefined
    try{
         user = await userModel.findOne({email:email})
    }
    catch(e){
        res.send({
            error:"failed to fetch the user"
        })
    }

    // validations
    if(!user){
        return res.send({
            error:"email is not registerd"
        })
    } 
    try{
        const isMatch = await bcrypt.compare(password,user.hashedpassword)
    if(!isMatch){
        return res.send({
            error:"password is incorrect"
        })
    }
    }
    catch(e){
        res.send({
            error:"Internal server error"
        })
    }  

    const token = jsonwebtoken.sign(
        {
        email:user.email,
        role:user.role
    },
    process.env.SECRETKEY,
    {
        expiresIn:"1h"
    }
    )

    res.cookie("token",token,{
        httpOnly:true,
        secure:true
    })

    res.send({
        message:"User Login successfull"
    })

}

export default handleLogin