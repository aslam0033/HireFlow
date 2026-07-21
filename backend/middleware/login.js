const isLoggedIn = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.send({
            error:"You are not logged in Please log in"
        })
    }
    if(jwt.verify(token, process.env.JWT_SECRET)){
        return next();
    }
    else{
        return res.send({
            error:"internal server error"
        })
    }
}

export default isLoggedIn