const express = require('express');
const bcrypt = require('bcrypt');
const passport  = require('passport');
const router  = express.Router();

const UserModel = require ('../models/user-model.js');


//POST SIGN UP
router.post('/api/signup', (req,res,next)=>{
     //No Email/Password Required
     if(!req.body.signupEmail || !req.body.signupPassword){
       //status code 400 - client error which can be fixed
       //this will trigger the catch callback instead of the then callback
       res.status(400).json({message: 'Both email and password needed'});
       return;
     }

     UserModel.findOne(
       {email: req.body.signupEmail},
       (err, userFromDb) => {
          if(err){
            //staus code 500 - server error
            res.status(500).json({message: 'Email could not found'});
            return;
          }
          if (userFromDb){
            res.status(400).json({message: 'Email already exists'});
            return;
          }
          const salt = bcrypt.genSaltSync(10);
          const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

          const theUser = new UserModel ({
            firstName: req.body.signupFirstName,
            lastName: req.body.signupLastName,
            email: req.body.signupEmail,
            encryptedPassword: scrambledPassword
          });

          theUser.save((err)=>{
            if(err){
            res.status(500).json({message: 'Sign Up Failed'});
            return;
            }
            //Auto Log In after signing up - req.login() passport function
            req.login(theUser, (err)=>{
              if(err){
                //staus code 500 - server error
                res.status(500).json({message: 'Log In Failed'});
                return;
              }

              //Remove encryptedPassword before sending
              //(not removing from DB - just the object)

              theUser.encryptedPassword = undefined;

              //Send User Info to FrontEnd
              res.status(200).json(theUser);
            });
          }); //close theUser.save()
       }
     ); //close UserModel.findOne()
}); //close router.post('/signup')
//-----------------------------------------------------------

// POST LOG IN
router.post('/api/login', (req, res, next)=> {
  const authenticateFunction =
    passport.authenticate('local', (err, theUser, passportErrorMessage)=>{
      //Errors would not allow to determine if login was Successful or Failure
      if (err){
        res.status(500).json({ message: 'Log In Error Unknown'});
        return;
      }
      //Log In Failed for sure
      if(!theUser){            //passportErrorMessage contains feedback messages from LocalStrategy (passport config)
        res.status(401).json(passportErrorMessage);
        return;
      }
      //Log In Successful
      req.login(theUser, (err)=>{
        if(err){
          res.status(500).json({ message: 'Log In Sesson Save Error'});
          return;
        }
       //Remove encryptedPassword before sending
        theUser.encryptedPassword = undefined;

        //It worked. Send the user's info (theUser = object) to the client
        res.status(200).json(theUser);
      });
    });

    authenticateFunction(req, res, next);
});
//-----------------------------------------------------------

// POST Log OUT
router.post('/api/logout', (req, res, next)=>{
  //req.logout() is a passport function
  req.logout();
  res.status(200).json({ message: 'Logged out successfully!'});
});
//---------------------------------------------------------------



// GET Check if a user is LOGGED IN
router.get('/api/checklogin', (req, res, next)=>{
  if(!req.user){
    res.status(401).json({message: 'No one is logged in!'});
    return;
  }

  //Remove encryptedPassword before sending
  req.user.encryptedPassword = undefined;
  //send the user's info
  res.status(200).json(req.user);
});




module.exports = router;
