var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Models
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var db = mongoose.connect('mongodb://localhost/mike-resume');
autoIncrement.initialize(db);
require('./models/Users');
require('./models/Links');
require('./models/SkillGroups');
require('./models/Skills');
require('./models/Samples');

// view engine setup
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/links', require('./routes/links'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/skillgroups', require('./routes/skillgroups'));
app.use('/api/samples', require('./routes/samples'));
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

process.on('message', function(message) {
 if (message === 'shutdown') {
   process.exit(0);
 }
});

module.exports = app;
