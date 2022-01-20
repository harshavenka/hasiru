function addcsrf(req,res,next){
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;//re.locals will be available in all views and files

    next();//passing the control to next middlewares
}

module.exports = addcsrf;