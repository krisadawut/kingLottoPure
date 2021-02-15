var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var adminNewsRouter = require('./routes/admin_news');
var adminTypeRouter = require('./routes/admin_type');
var adminUserTypeRouter = require('./routes/admin_usertype');
var adminUserRouter = require('./routes/admin_user');
var adminUser_viewRouter = require('./routes/adminUser_view');

//api
var usersRouter = require('./routes/api/users');
var NewsRouter = require('./routes/api/news');
var typeRouter = require('./routes/api/type');
var usertypeRouter = require('./routes/api/usertype');
//

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin_news', adminNewsRouter);
app.use('/admin_type', adminTypeRouter);
app.use('/admin_usertype', adminUserTypeRouter);
app.use('/admin_user', adminUserRouter);
app.use('/admin_user_view', adminUser_viewRouter);


//api
app.use('/api/news', NewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/type', typeRouter);
app.use('/api/usertype', usertypeRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
