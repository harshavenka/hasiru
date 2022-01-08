const express = require('express');
const app = express();
const path = require('path');
const csrf = require('csurf');
const csrftoken = require('./middleware/csrf.token');
const errorhandle = require('./middleware/error.handler');


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/hasiru",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connection successfull!!"))
.catch((e)=> console.log("ther was an error"));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(csrf());
app.use(csrftoken);
app.use(errorhandle);


const users = require("./models/user.auth");
const authroutes = require('./routes/auth.routes');
//for custom file use ./ for folders in same file ../ to go back to prev folder





app.use(authroutes);



































app.listen(3000);

