const express = require('express');

const router  = express.Router();

const ClassModel = require ('../models/class-model');

// POST add Points
router.post('/api/class', (req, res, next)=>{
 if(!req.user){
   res.status(401).json({ message: 'You MUST log in to add points to your team.'});
 }

  *const newPost = new PostModel({
    content: req.body.postContent,
    owner: req.body.postOwner,
    user: req.user._id
  });

  newPost.save((err)=> {
    if(err && newPost.errors === undefined){
      res.status(500).json ({ message: 'Post Not Saved' });
      return;
    }
    //validation error
    if(err && newPost.errors) {
      res.status(400).json({
        *content: req.body.postContent,
        owner: req.body.postOwner,
        user: req.user._id
      });
      return;
    }
    //Succcesful Post created!
    res.status(200).json(newPost);

  });
});
//-------------------------------------------


// GET Show ALL Posts
router.get('/api/posts', (req, res, next)=>{
  if(!req.user){
    res.status(401).json({ message: 'Log in to view posts please'});
    return;
  }

*// add teamId projection?
  PostModel
  .find()
  .populate('Post', {encryptedPassword: 0}) // retreive all the info of the owners(except encryptedPassword), possible due to the 'ref' in the camel model

  .exec((err, postList)=>{
    if (err){
      res.status(500).json({ message: 'Unable to find Posts'});
      return;
    }
    res.status(200).json(postList);
  });
}); // close router.get


module.exports = router;
