const express = require('express');
const multer  = require('multer');

const router  = express.Router();

const PostModel = require ('../models/post-model');

const uploader = multer({
  dest: __dirname + '/../public/uploads/'
});



// POST Create New Post
// *need to add team ID for posts??
// *criteria object would be needed to find all of the posts that belong to a certain team, search by team ID

                                             //name from New Post Form
router.post('/api/posts',
  uploader.single('file'),
  (req, res, next)=>{
 if(!req.user){
   res.status(401).json({ message: 'You MUST log in to create a Post'});
 }

  const newPost = new PostModel({
    content: req.body.postContent,
    ownerId: req.user._id
  });

  //Add photo if file is uploaded
  if(req.file){
    newPost.photo = '/uploads/' + req.file.filename;
  }

  newPost.save((err)=> {
    if(err && newPost.errors === undefined){
      res.status(500).json ({ message: 'Post Not Saved' });
      return;
    }
    //validation error
    if(err && newPost.errors) {
      res.status(400).json({
        contentErr: newPost.errors.content
      });
      return;
    }
    //Put the full user info here for Angular
    newPost.ownerId =req.user;
    //Remove owner's encryptedPassword
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
  .populate('Post', {encryptedPassword: 0}) // retreive all the info of the owners(except encryptedPassword)

  .exec((err, postList)=>{
    if (err){
      res.status(500).json({ message: 'Unable to find Posts'});
      return;
    }
    res.status(200).json(postList);
  });
}); // close router.get


//POST Add Likes to a single post
router.patch('/api/updatepost/:id',(req, res, next)=>{
  if(!req.user){
    res.status(401).json({ message: 'Log in to view posts please'});
    return;
  }
const postId = req.params.id;
const updates = { likes: req.body.likes };
console.log(req.body.likes);

  PostModel.findByIdAndUpdate(postId, updates, (err, result) => {
    if (err){ return next(err); }

    res.status(200).json(result);

  });


});


module.exports = router;
