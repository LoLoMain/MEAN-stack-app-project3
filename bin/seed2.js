mongoose.connect('mongodb://localhost/school-dojo');
                            //          |
                            // use school-dojo

// User Seed Info ------------------------
const UserModel = require('../models/user-model.js');

 const userListArray = [
{
  "title": "Mr.",
  "firstName": "John",
  "lastName": "Johnson",
  "email": "johnjohnson@browardschools.com",
  "encryptedPassword": "",
},
{
  "title": "Mrs.",
  "firstName": "Sue",
  "lastName": "Smith",
  "email": "suesmith@browardschools.com",
  "encryptedPassword": "",
},
{
  "title": "Ms.",
  "firstName": "Belinda",
  "lastName": "Brown",
  "email": "belindabrown@browardschools.com",
  "encryptedPassword": "",

}, {

  "title": "Mr.",
  "firstName": "William",
  "lastName": "Wilson",
  "email": "williamwilson@browardschools.com",
  "encryptedPassword": "",

}
];

UserModel.create(
  userListArray,          //1st Argument -> array of users info objects
  (err, usersResults) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No Users for you! DataBase Error.');
      console.log(err);
      return;  //early return
    }

    usersResults.forEach((user)=>{
      console.log('New User!!! ' + user.firstName);
      });
  }
); //create new instances and save using teacher objects
