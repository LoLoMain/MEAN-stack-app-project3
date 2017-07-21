const passport       = require('passport');
const bcrypt         = require ('bcrypt');
const LocalStrategy  = require ('passport-local').Strategy;

const UserModel      = require('../models/user-model');


//Save user's ID session
passport.serializeUser((userFromDB, next)=>{
  next(null, userFromDB._id);
//      |
// null in 1st argument means no Error :)
});

//Retrieve user's info with the ID from the session
passport.deserializeUser((idFromSession, next)=>{
  UserModel.findById(
    idFromSession,

    (err, userFromDB) => {
      if(err) {
        next(err);
        return;
      }
      //Tell passport that we got the user's info from the DB
      next(null, userFromDB);
      // null in 1st argument means no Error :)
    }
  );
});

// STRATEGIES------------------------------------------------------------------
//SETUP passport-local (log in with email and password)

passport.use(new LocalStrategy(
  {                   // 1st Argument -> settings object connection between form
  usernameField: 'loginEmail', //sent through AJAX from Angular
  passwordField: 'loginPassword' //sent through AJAX from Angular
   },
   (theEmail, thePassword, next)=>{
     UserModel.findOne(
        { email: theEmail },
        (err, userFromDB) => { //DB check
          if (err){
            next(err);
            return;
          }
          if(!userFromDB){ //email not found
            next (null, false, {message: 'Incorrect email'});
            return;
          }
          //Email Successful, Check Password
          if(!bcrypt.compareSync(thePassword, userFromDB.encryptedPassword)){
            next (null, false, {message: 'Incorrect password'});
            return;
          }
          //Log in Successful
          next(null, userFromDB);
        }
     ); //end UserModel.findOne

   } //end callback
 ));
