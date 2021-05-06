const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin')
const customerRoutes = require('./routes/shop')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes);
app.use(customerRoutes);

app.listen(3000);
