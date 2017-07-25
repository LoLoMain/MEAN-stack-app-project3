const express = require('express');

const router  = express.Router();

const ClassModel = require ('../models/class-model');
const TeamModel = require ('../models/team-model');


// PATCH add Points to a CLASS (individual)
router.patch('/api/classpoints/:id', (req, res, next)=>{
 if(!req.user){
   res.status(401).json({ message: 'You MUST log in to add points to your class.'});
   return;
 }
 const classId = req.params.id;
 const pointsUpdates = {
   teamworkPoints: req.body.teamPoints,
   gradePoints: req.body.gradePoints,
   readingPoints: req.body.readingPoints,
   prepPoints: req.body.prepPoints
 };
 console.log('🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪');
 console.log(classId);
 console.log(pointsUpdates);

 ClassModel.findByIdAndUpdate(classId, pointsUpdates, (err,classResult)=>{
   if (err){
     return next(err);
   }
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
