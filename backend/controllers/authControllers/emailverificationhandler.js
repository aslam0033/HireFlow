import pendingUserModel from "../../models/pendingUser.js"
import userModel from "../../models/user.js"
import jsonwebtoken from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";

const emailverificationhandler = async (req, res) => {
    //get data from the request
    const emailver = req.cookies.emailver;
    const { otp} = req.body


    try {
        const userData = jsonwebtoken.verify(emailver, process.env.SECRETKEY);
        //find the user
        const user = await pendingUserModel.findOne({ email: userData.email })

        //validations
        if (!user) {
            return res.send({
                error: "User not found! Register and try again"
            })
        }
        if (Date.now() > user.otpExpiry) {
            return res.send({
                error: "otp is expired! Please request another otp"
            })
        }
        const isMatch = await bcrypt.compare(otp.toString(), user.otpHash)
        if(isMatch){
            // add the user to database
        const newUser = {
            name: user.fullname,
            hashedPassword: user.hashedPassword,
            email: user.email,
        }
        await userModel.create(newUser)

        // delete from pending user 
        const id = user._id;
        await pendingUserModel.findByIdAndDelete(id);

        //sending the response
        return res.send({
            message: "user created successfully"
        })
        }
        else{
            res.status(400).send({
                error:"wrong otps"
            })
        }

    }
    catch (e) {
        console.log(e);

        return res.send({
            error: "Something went wrong! please try again"
        })
    }
}

export default emailverificationhandler