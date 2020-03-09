const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/employee', require('./router/employee'));
app.use('/client', require('./router/client'));
app.use('/delegate', require('./router/delegate'));
app.use('/coursetype', require('./router/coursetype'));
app.use('/course', require('./router/course'));
app.use('/coursefee', require('./router/coursefee'));
app.use('/location', require('./router/location'));
app.use('/booking', require('./router/booking'));
app.use('/paymentmethod', require('./router/paymentmethod'));
app.use('/invoice', require('./router/invoice'));
app.use('/registration', require('./router/registration'));
app.set('view engine', 'ejs');
app.listen(3000);
