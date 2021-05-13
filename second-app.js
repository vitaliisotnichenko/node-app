const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminUsers = require('./routes/usersAdmin');
const users = require('./routes/users');

app.use = bodyParser.urlencoded({extended: false})
app.use(adminUsers);
app.use(users);
app.listen(3000);