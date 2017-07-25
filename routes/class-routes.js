const express = require('express');

const router  = express.Router();

const ClassModel = require ('../models/class-model');
const TeamModel = require ('../models/team-model');
const UserModel = require('../models/user-model');


// PATCH add Points to a CLASS (individual)
router.put('/api/classpoints/:id', (req, res, next)=>{
 if(!req.user){
   res.status(401).json({ message: 'You MUST log in to add points to your class.'});
   return;
 }
 const classId = req.params.id;
 const pointsUpdates = {
   "class.teamworkPoints": req.body.teamPoints,
   "class.gradePoints": req.body.gradePoints,
   "class.readingPoints": req.body.readingPoints,
   "class.prepPoints": req.body.prepPoints
 };
 console.log(classId);
 console.log(pointsUpdates);

 UserModel.findByIdAndUpdate(req.user._id, pointsUpdates, (err, classResult)=>{
   if (err){
     console.log(err);
     return;
   }

   console.log(pointsUpdates);
   console.log(classResult);
   res.status(200).json(classResult);
 });
});




//PATCH  update TEAM total Points
router.patch('/api/teampoints/:id',(req, res, next)=>{
  if(!req.user){
    res.status(401).json({ message: 'Log in to add points to your team please'});
    return;
  }
const teamId = req.params.id;
const teamPointsUpdates = {
  teamPoints: req.body.teamTotal };

  TeamModel.findByIdAndUpdate(teamId, teamPointsUpdates, (err, teamResult) => {
    if (err){
      return next(err);
    }

    res.status(200).json(teamResult);

  });
});

module.exports = router;
