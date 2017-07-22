// SEED FILE
//     a JavaScript file that saves things to your database when you run it
//     (makes onboarding easier and it allows you to re-populate the DB after
//     you delete things.)

const mongoose = require('mongoose');

                            // database name
mongoose.connect('mongodb://localhost/school-dojo');
                            //          |
                            // use school-dojo

// User Seed Info ------------------------
const UserModel = require('../models/user-model.js');
//
// const userListArray = [
//   { firstName: 'Sally',
//     lastName: 'Hernandez',
//     email: 'sallyhernandez@browardschools.com',
//     encryptedPassword: 'abc123',
//
//
//   },
//   { firstName: 'Bob',
//     lastName: 'Smith',
//     email: 'bobsmith@browardschools.com',
//     encryptedPassword: 'abc123',
//
//   },
//   { firstName: 'Mike',
//     lastName: 'Jones',
//     email: 'mikejones@browardschools.com',
//     encryptedPassword: 'abc123',
//
//   },
//   { firstName: 'Brenda',
//     lastName: 'Matos',
//     email: 'brendamatos@browardschools.com',
//     encryptedPassword: 'abc123',
//
//   },
//   { firstName: 'Ethan',
//     lastName: 'Martinez',
//     email: 'ethanmartinez@browardschools.com',
//     encryptedPassword: 'abc123',
//
//   },
//   { firstName: 'Jessica',
//     lastName: 'Brown',
//     email: 'jessicabrown@browardschools.com',
//     encryptedPassword: 'abc123',
//
//   },
//
// ];
// //create teacher objects
//
// UserModel.create(
//   userListArray,          //1st Argument -> array of users info objects
//   (err, usersResults) =>{  //2nd Argument -> callback!
//     if (err){
//       console.log('No Users for you! DataBase Error.');
//       console.log(err);
//       return;  //early return
//     }
//
//     usersResults.forEach((user)=>{
//       console.log('New User!!! ' + user.firstName);
//       });
//   }
// ); //create new instances and save using teacher objects
//
//

//
const TeamModel = require('../models/team-model.js');
// var idArray = [];
// // Team Seed Info ------------------------
// UserModel.find((err, results) => {
//   results.forEach((teachers)=> {
//     idArray.push(teachers._id);
//   });
//   const teamListArray = [
//     {teamName: 'Panthers',
//      userIds: []},
//     {teamName: 'Jaguars',
//      userIds: []},
//     {teamName: 'Cheetas',
//      userIds: []}
//   ];
//   //create team objects
//   var count = 0;
//   var index = 0;
//
//     idArray.forEach((id) => {
//
//       teamListArray[index].userIds.push(id);
//
//       count += 1;
//       index += 1;
//       if ( count % 3 === 0){
//         index = 0;
//       }
//
//     });
//   //populate team objects with teacher ids
//
//
//   TeamModel.create(
//     teamListArray,          //1st Argument -> array of team info objects
//     (err, teamResults) =>{  //2nd Argument -> callback!
//       if (err){
//         console.log('No stuff for you! DataBase Error.');
//         return;  //early return
//       }
//
//       teamResults.forEach((team)=>{
//         console.log('New Team!!!! ' + team.teamName);
//         });
//     }
//   );
// });
//find and get all ids and store in array

// create and save new instances of teams

const ClassModel = require('../models/class-model.js');

const classListArray =
  {
  gradeLevel: '4',
  students: [
    {
     name: 'Jerrold Larocca',
     picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
    },
    {
     name: 'Joshua Thomas',
     picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Adrian Llerena',
    picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Coralie Wenrich',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Craig Flanary',
    picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Rebecca Echavarria',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Kanesha Simonsen',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },

   ],

   points: 0
  }
;
//Class Seed Info ------------------------
UserModel.findOne({"_id": "597287a21223351b585f06d8"},
  (err, oneTeacher) => {
    let updatedTeacher = oneTeacher;
    updatedTeacher.class = classListArray;
    console.log(updatedTeacher);
    updatedTeacher.save((err, result) => {
      console.log(result);
    });

  });

// ClassModel.create(
//   classListArray,          //1st Argument -> array of class info objects
//   (err, classResults) =>{  //2nd Argument -> callback!
//     if (err){
//       console.log('No stuff for you! DataBase Error.');
//       return;  //early return
//     }
//
//     classResults.forEach((oneClass)=>{
//       console.log('New Class!!!! ' + oneClass.student.name);
//       });
//   }
// );



//----------------------------------------------------
//Post Seed Info ------------------------

// const PostModel = require('../models/post-model.js');
//
// const postListArray = [
//   { content: 'Great Job to Leah Tiernan for scoring 95% on her math test',
//     photoUrl: '',
//     ownerName: 'Jessica Brown',
//     ownerId: '596f85ae39910728bf70ba78',
//   },
//   { content: 'Students working on the Phases of the Moon',
//     photoUrl: 'https://s-media-cache-ak0.pinimg.com/originals/8c/be/bd/8cbebdde052f6b012f1ba36d448254fc.png',
//     ownerName: 'Mike Jones',
//     ownerId: '596f85ae39910728bf70ba75',
//
//   },
//   { content: ' 1st Grade Trip to Safety Town',
//     photoUrl: 'http://www.a2schools.org/cms/lib8/MI01907933/Centricity/Domain/1167/16258586830_9e01ce6171_z.jpg',
//     ownerName: 'Ethan Martinez',
//     ownerId: '596f85ae39910728bf70ba78',
//   },
//
//
// ];
//
// PostModel.create(
//   postListArray,          //1st Argument -> array of team info objects
//   (err, postResults) =>{  //2nd Argument -> callback!
//     if (err){
//       console.log('No stuff for you! DataBase Error.');
//       return;  //early return
//     }
//
//     postResults.forEach((post)=>{
//       console.log('Post Info: ' + post.content);
//       console.log('Posted By:' + post.ownerName);
//       });
//   }
// );
