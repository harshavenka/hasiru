function createUserSession(req, user, action) {
  req.session.uid = user._id.toString();
  
  req.session.name = user.name;//to get name
  
  req.session.isAdmin = user.isAdmin;
  req.session.save(action);
}

function destroyUserAuthSession(req) {
  req.session.uid = null;
  req.session.name = '';
}

module.exports = {
  createUserSession: createUserSession,
  destroyUserAuthSession: destroyUserAuthSession
};