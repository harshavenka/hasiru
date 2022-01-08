function addcsrf(req,res,next){
    res.locals.csrftoken = req.csrftoken();
    next();
}

module.exports = addcsrf;