const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin')
const customerRoutes = require('./routes/shop')
const bodyParser = require('body-parser');
const path =  require('path');

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use(customerRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'))
})

app.listen(3000);
