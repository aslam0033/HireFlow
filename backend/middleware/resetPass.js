const isOtpVerified = (req,res,next)=>{
    const isOtpVerified = req.cookies.isOtpVerified
    if(!isOtpVerified){
        return res.send({
            error:"otp is not verified"
        })
    }
    if(jwt.verify(isOtpVerified, process.env.JWT_SECRET)){
        return next();
    }
    else{
        return res.send({
            error:"internal server error"
        })
    }
}

export default isOtpVerified