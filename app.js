const express = require('express');
const path = require('path');

const app = express();
const authroutes = require('./routes/auth.routes');
//for custom file use ./ for folders in same file ../ to go back to prev folder

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(authroutes);



































app.listen(3000);

