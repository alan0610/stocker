const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/products')
const brandRouter = require('./routes/brands')
const categoryRouter = require('./routes/categories')

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);
app.use('/brands', brandRouter);
app.use('/categories', categoryRouter);

app.listen(3030, ()=>{ 
  console.log("El servidor STOCKER corriendo en: http://localhost:3030/");
});

module.exports = app;
