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

const userListArray = [
  { firstName: 'Sally',
    lastName: 'Hernandez',
    email: 'sallyhernandez@browardschools.com',
    encryptedPassword: 'abc123'

  },
  { firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@browardschools.com',
    encryptedPassword: 'abc123'
  },
  { firstName: 'Mike',
    lastName: 'Jones',
    email: 'mikejones@browardschools.com',
    encryptedPassword: 'abc123'
  },
  { firstName: 'Brenda',
    lastName: 'Matos',
    email: 'brendamatos@browardschools.com',
    encryptedPassword: 'abc123'
  },
  { firstName: 'Ethan',
    lastName: 'Martinez',
    email: 'ethanmartinez@browardschools.com',
    encryptedPassword: 'abc123'
  },
  { firstName: 'Jessica',
    lastName: 'Brown',
    email: 'jessicabrown@browardschools.com',
    encryptedPassword: 'abc123'
  },


];

UserModel.create(
  userListArray,          //1st Argument -> array of users info objects
  (err, usersResults) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No stuff for you! DataBase Error.');
      return;  //early return
    }

    usersResults.forEach((user)=>{
      console.log('New User!!! ' + user.firstName);
      });
  }
);

// Team Seed Info ------------------------

const TeamModel = require('../models/team-model.js');

const teamListArray = [
  { teamName: 'Panthers',
    userIds: ["596f85ae39910728bf70ba78", "596f85ae39910728bf70ba77",],
  },
  { teamName: 'Jaguars',
    userIds: ["596f85ae39910728bf70ba76","596f85ae39910728bf70ba75"],
  },
  { teamName: 'Cheetas',
    userIds: ["596f85ae39910728bf70ba74","596f85ae39910728bf70ba73"],
  },

];

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

// Post Seed Info ------------------------

const PostModel = require('../models/post-model.js');

const postListArray = [
  { content: 'Great Job to Leah Tiernan for scoring 95% on her math test',
    ownerName: 'Jessica Brown',
  },
  { content: 'Students working on the Phases of the Moon',
    ownerName: 'Mike Jones',
  },
  { content: 'Safety Town',
    ownerName: 'Ethan Martinez',
  },


];

PostModel.create(
  postListArray,          //1st Argument -> array of team info objects
  (err, postResults) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No stuff for you! DataBase Error.');
      return;  //early return
    }

    postResults.forEach((post)=>{
      console.log('Post Info: ' + post.content);
      console.log('Posted By:' + post.ownerName);
      });
  }
);

//Class Seed Info ------------------------

const ClassModel = require('../models/class-model.js');

const classListArray = [
  {
  gradeLevel: '4',
  students: [
    {
     name: 'Jerrold Larocca',
     picture: ''
    },
    {
     name: 'Joshua Thomas',
     picture: ''
   },
   {
    name: 'Adrian Llerena',
    picture: ''
   },
   {
    name: 'Coralie Wenrich',
    picture: ''
   },
   {
    name: 'Craig Flanary',
    picture: ''
   },
   {
    name: 'Rebecca Echavarria',
    picture: ''
   },
   {
    name: 'Kanesha Simonsen',
    picture: ''
   },

   ],

   points: [10,10,15]
  },
];

ClassModel.create(
  classListArray,          //1st Argument -> array of class info objects
  (err, classResults) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No stuff for you! DataBase Error.');
      return;  //early return
    }

    classResults.forEach((oneClass)=>{
      console.log('New Class!!!! ' + oneClass.student.name);
      });
  }
);
