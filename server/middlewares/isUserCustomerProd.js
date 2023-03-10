const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");

var isUserCustomerProd = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { data } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log("USER ROLE is = ");
      console.log(data.role);
      //@ts-ignore

      if (data.role === "customer") {
        return next();
      }
      return next(new ErrorHandler("Not Authorized, only customer can access this route", 401));
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Invalid Token,Unauthorized access is prohibited",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "You are not logged in, please login first",
    });
  }
};

module.exports = isUserCustomerProd;
