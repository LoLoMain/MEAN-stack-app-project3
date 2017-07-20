const express = require('express');
const bcrypt = require('bcrypt');
const router  = express.Router();

const UserModel = require ('../models/user-model.js');


//POST signup
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
}); //close router.post


// POST login
// POST logout
// GET check login





module.exports = router;
