function createsession(req,user,action){
    req.session.uid = user._id.toString();
    req.session.name = user.name;
    req.session.save(action);
}

module.exports ={
    createsession : createsession
};