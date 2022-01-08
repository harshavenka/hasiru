const users = require("../models/user.auth")

function getSignup(req,res) {

   res.render('customer/auth/signup');
}


 async function signup(req,res) {
     try{
         const stored = new users({
            email:req.body.email,
            password:req.body.password,
            fullname:req.body.fullname,
            address:[{
                street:req.body.street,
                pincode:req.body.postal,
                city:req.body.city
            }]
            
         });
         const done= await stored.save();
         console.log(done);
         res.redirect('/login');
     }
     catch(error){
         res.send(Error);
     }
        
}
function getLogin(req,res) {
    res.render('customer/auth/login');
}

module.exports  ={
    getSignup:getSignup,
    getLogin: getLogin,
    signup:signup
};