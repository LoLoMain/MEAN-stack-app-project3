const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
      type: String
    },
    ownerName: {
      type: String
    },
    owner: {
        type: Schema.Types.ObjectId
    },
    teamId : {
       type: Schema.Types.ObjectId
    }
 },
 {
  timestamps: true
 }
);

// Model
// constructor function that alows us to interact with a single collection
const PostModel= mongoose.model('Post', postSchema);
// Collection name
// Post -> posts -> db.posts.find()

// DO NOT FORGET THIS - GAME OVER  😵
module.exports = PostModel;
// Connects the  model above to the routes file
