import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const handleLogin = async (req, res) => {
    // getting data from request
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email: email })
        // validations
        if (!user) {
            return res.send({
                error: "email is not registerd"
            })
        }
        const isMatch = await bcrypt.compare(password, user.hashedpassword)
        if (!isMatch) {
            return res.send({
                error: "password is incorrect"
            })
        }

        //jwt token
        const token = jsonwebtoken.sign(
            {
                email: user.email,
                role: user.role
            },
            process.env.SECRETKEY,
            {
                expiresIn: "1h"
            }
        )

        //setting cookie and sending the response
        res.cookie("token", token, {
            httpOnly: true,
            secure:false
        })

        return res.send({
            message: "User Login successfull"
        })
    }
    catch (e) {
        return res.send({
            error: "Something went wrong. Please try again later."
        })
    }
}

export default handleLogin