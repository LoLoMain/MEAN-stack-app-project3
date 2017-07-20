const express = require('express');
const router  = express.Router();

const PostModel = require ('../models/post-model.js');



//Find all posts in D
router.get('/dashboard', (req, res, next) => {
  PostModel.find((err, postList) => {
    if (err){
      res.json(err);
      return;
    }
  res.json(postList);
  });
});




module.exports = router;
