import jsonwebtoken from 'jsonwebtoken'
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.send({
        error: "You are not logged in Please log in",
      });
    }
    const decoded = jsonwebtoken.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    next();
  } catch (e) {
    return res.send({
      error: "internal server error",
    });
  }
};

export default isLoggedIn;
