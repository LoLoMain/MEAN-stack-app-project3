const express = require('express');
const router  = express.Router();

const PostModel = require ('../models/post-model.js');




router.get('/dashboard', (req, res, next) => {
  PostModel.find((err, postList) => {
    if (err){
      next(err);
      return;
    }

    res.locals.postList = postList;
    
  res.render('dashboard.ejs');
  });
});




module.exports = router;
