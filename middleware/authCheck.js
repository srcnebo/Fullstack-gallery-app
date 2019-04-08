module.exports = function authCheck(req, res, next) {
  if (!req.user) {
    //if user is not logged in
    res.json("Error");
  } else {
    // if logged in
    next();
  }
};
