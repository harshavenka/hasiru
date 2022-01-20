function checkAuthStatus(req, res, next) {
  const uid = req.session.uid;

  if (!uid) {
    return next();
  }

  res.locals.uid = uid;
  res.locals.isAuth = true; 
  res.locals.isAdmin = req.session.isAdmin;
  res.locals.name = req.session.name;
  next();
}

module.exports = checkAuthStatus;