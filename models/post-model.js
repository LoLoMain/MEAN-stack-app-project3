const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    photo:{
      type: String
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'//"ref" is the string name of the model that the ID refers to
    },
    likes:{
      type: Number,
      default: 0
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    },
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
