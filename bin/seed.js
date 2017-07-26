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

//  const userListArray = [
//    {
//   "_id": ObjectId("5977b45194d895d90a91b1e2"),
//   "updatedAt": ISODate("2017-07-25T21:12:49.688Z"),
//   "createdAt": ISODate("2017-07-25T21:12:49.688Z"),
//   "title": "Mr.",
//   "firstName": "John",
//   "lastName": "Johnson",
//   "email": "johnjohnson@browardschools.com",
//   "encryptedPassword": "$2a$10$ibRbFeeyuezfqD1BaqPbAOpuV83.6Qn4Ru7amK6kRfcdb00j3ts..",
//   "__v": 0
// },
// {
//   "_id": ObjectId("5977b4ad94d895d90a91b1e3"),
//   "updatedAt": ISODate("2017-07-25T21:14:21.560Z"),
//   "createdAt": ISODate("2017-07-25T21:14:21.560Z"),
//   "title": "Mrs.",
//   "firstName": "Sue",
//   "lastName": "Smith",
//   "email": "suesmith@browardschools.com",
//   "encryptedPassword": "$2a$10$NwJiqYkDpK7jagP/sM2.UOXb7a.q3Ij9wlOrK9hz/fa4fkrRd1xCW",
//   "__v": 0
// },
// {
//   "_id": ObjectId("5977b4fd94d895d90a91b1e4"),
//   "updatedAt": ISODate("2017-07-25T21:15:41.109Z"),
//   "createdAt": ISODate("2017-07-25T21:15:41.109Z"),
//   "title": "Ms.",
//   "firstName": "Belinda",
//   "lastName": "Brown",
//   "email": "belindabrown@browardschools.com",
//   "encryptedPassword": "$2a$10$DzIN3VCoXgm63HTD4vip/OiDkUA4HT11LPeburhw4Pb78RGktRtHu",
//   "__v": 0
// },
// {
//   "_id": ObjectId("5977b52394d895d90a91b1e5"),
//   "updatedAt": ISODate("2017-07-25T21:16:19.849Z"),
//   "createdAt": ISODate("2017-07-25T21:16:19.849Z"),
//   "title": "Mr.",
//   "firstName": "William",
//   "lastName": "Wilson",
//   "email": "williamwilson@browardschools.com",
//   "encryptedPassword": "$2a$10$zZjYiDYnja8jlQf.Mh9MzeGWCcNCDy91JLIY0objFkC3A.LmEhGZ.",
//   "__v": 0
// }
//
//  ];
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

//NEW TEAMS!
const TeamModel = require('../models/team-model.js');
var idArray = [];
Team Seed Info ------------------------
UserModel.find((err, results) => {
  results.forEach((teachers)=> {
    idArray.push(teachers._id);
  });
  const teamListArray = [
    {teamName: 'Panthers',
     userIds: []},
    {teamName: 'Jaguars',
     userIds: []}
  ];
  //create team objects
  var count = 0;
  var index = 0;

    idArray.forEach((id) => {

      teamListArray[index].userIds.push(id);

      count += 1;
      index += 1;
      if ( count % 2 === 0){
        index = 0;
      }

    });
//  populate team objects with teacher ids


  TeamModel.create(
    teamListArray,          //1st Argument -> array of team info objects
    (err, teamResults) =>{  //2nd Argument -> callback!
      if (err){
        console.log('No stuff for you! DataBase Error.');
        return;  //early return
      }

      teamResults.forEach((team)=>{
        console.log('New Team!!!! ' + team.teamName);
        });
    }
  );
});
//find and get all ids and store in array
//create and save new instances of teams

const ClassModel = require('../models/class-model.js');

const classListArray =
  {
  gradeLevel: '5',
  students: [
    {
     name: 'Steven McCurray',
     picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
    },
    {
     name: 'Johnny Black',
     picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Clyde Bonnie',
    picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Hartey Davidson',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Veronica Mars',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Austin Powers',
    picture: 'https://cdn1.iconfinder.com/data/icons/man-icon-set/100/man_icon-10-512.png'
   },
   {
    name: 'Coby Bryan',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Celina Dionne',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
   },
   {
    name: 'Anne Powers',
    picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
  },
  {
   name: 'Barbara Waters',
   picture: 'https://cdn3.iconfinder.com/data/icons/avatars-with-different-clothes-and-hairstyles/512/Avatar_female_person_user_woman_girl_ponytail_shirt_icon-512.png'
  }
   ],

  }
;



//Class Seed Info ------------------------
UserModel.findOne({"_id": "5977b52394d895d90a91b1e5"},
  (err, oneTeacher) => {
    let updatedTeacher = oneTeacher;
    updatedTeacher.class = classListArray;
    console.log(updatedTeacher);
    updatedTeacher.save((err, result) => {
      console.log(result);
    });

  });

ClassModel.create(
  classListArray,          //1st Argument -> array of class info objects
  (err, classResults) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No stuff for you! DataBase Error.');
      return;  //early return
    }

    // classResults.forEach((oneClass)=>{
    //   console.log('New Class!!!! ' + oneClass.student.name);
    //   });
  }
);



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
