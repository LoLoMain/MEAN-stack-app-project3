const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const cors         = require('cors');

require('dotenv').config();

require('./config/passport-config');
                            // see .env
mongoose.connect(process.env.MONGODB_URI);


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// MIDDLEWARES -------------------------------------------------------

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session({
  secret: "school-dojoappsecretstuff",
  resave: true,
  saveUninitialized: true
}));
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));


// Middleware to create the "currentUser" variable
app.use((req,res,next)=>{
  //Check if the user IS logged in
  if(req.user){
    res.locals.currentUser = req.user;
  }
  next();
});


// END MIDDLEWARES ----------------------------------------------------

// ROUTES ------------------------------------------------------------
const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

const postRoutes = require('./routes/post-routes');
app.use('/', postRoutes);

const classRoutes = require('./routes/class-routes');
app.use('/', classRoutes);

//END ROUTES ----------------------------------------------------------


//If no routes match, send to Angular HTML
app.use((req,res,next)=>{
  res.sendFile(__dirname + '/public/index.html');
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
