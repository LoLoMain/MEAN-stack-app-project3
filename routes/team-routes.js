const express = require('express');
const router  = express.Router();

const TeamModel = require ('../models/team-model');
const ClassModel = require ('../models/class-model');



//PUT  update TEAM total Points
router.put('/api/teampoints/:id',(req, res, next)=>{
  if(!req.user){
    res.status(401).json({ message: 'Log in to add points to your team please'});
    return;
  }
const teamId = req.params.id;
const teamPointsUpdates = {
  teamPoints: req.body.teamTotal };
  console.log(teamPointsUpdates);
  console.log('🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓');

  TeamModel.findByIdAndUpdate(teamId, teamPointsUpdates, (err, teamResult) => {
    if (err){
      return next(err);
    }

    res.status(200).json(teamResult);
    console.log('🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓');

  });
});


module.exports = router;
