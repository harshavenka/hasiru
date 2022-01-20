function checkAuthstatus(req,res,next){
    const uid = req.session.uid;

    if(!uid){
        return next();
    }

    res.locals.uid = uid;
    res.locals.name = req.session.name;//to get name
    res.locals.isAuth = true;
    next();
}

module.exports = checkAuthstatus;