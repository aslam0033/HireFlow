const logouthandler = async(req,res) => {
    res.clearCookie("token",{
        httpOnly:true,
        secure:false
    })
    res.status(200).send({
        message:"logout successfull"
    })
}

export default logouthandler