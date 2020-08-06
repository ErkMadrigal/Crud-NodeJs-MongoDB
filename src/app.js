//modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connetign the db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch(err => console.log('type error'+ err));

//importing routes
const indexRoutes = require('./routes/index');

//settings 
app.set('port', process.env.PORT || 3000); // indicando que tome el puerto de SO en caso de que no exista tomara el 3000
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//archivos estaticos
// app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})