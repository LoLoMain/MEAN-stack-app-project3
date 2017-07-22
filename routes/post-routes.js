const express = require('express');

const router  = express.Router();

const PostModel = require ('../models/post-model');



// POST Create New Post
// *need to add team ID for posts??
// *criteria object would be needed to find all of the posts that belong to a certain team, search by team ID

router.post('/api/posts', (req, res, next)=>{
 if(!req.user){
   res.status(401).json({ message: 'You MUST log in to create a Post'});
 }

  const newPost = new PostModel({
    content: req.body.postContent,
    photoUrl: req.body.postPhotoUrl,
    ownerId: req.user._id
  });

  newPost.save((err)=> {
    if(err && newPost.errors === undefined){
      res.status(500).json ({ message: 'Post Not Saved' });
      return;
    }
    //validation error
    if(err && newPost.errors) {
      res.status(400).json({
        contentErr: newPost.errors.content,
        photoUrlErr: newPost.errors.photoUrl
      });
      return;
    }
    //Put the full user info here for Angular
    newPost.ownerId =req.user;

    newPost.ownerId.encryptedPassword = undefined;

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

// add teamId projection?
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
