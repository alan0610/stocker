const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

//REQUIRE ROUTES
const brandRouter = require('./routes/brand');
const clothingRouter = require('./routes/clothing');
const productRouter = require('./routes/product');
const saleRouter = require('./routes/sale');
const saleDetailRouter = require('./routes/saleDetail');
const stockRouter = require('./routes/stock');
const typeRouter = require('./routes/type');
const userRouter = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/brands', brandRouter);
app.use('/clothing', clothingRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/saleDetails', saleDetailRouter);
app.use('/stock', stockRouter);
app.use('/types', typeRouter);
app.use('/users', userRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
