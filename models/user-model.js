const mongoose = require('mongoose');

// Should ClassModel be a part of User Schema?
const ClassModel = require ('./class-model.js');
const PostModel = require ('./post-model.js');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  encryptedPassword: {
    type: String,
    required: [true, 'Please provide a password']
  },
  teamId: {
    type: Number,

  },
  //use class id
  class: [ClassModel.schema],
  posts: [PostModel.schema]

},
{
  timestamps: true
  // timestamp creates two additional fields: "createdAt" & "updatedAt"
 }

);

// Model
// constructor function that alows us to interact with a single collection
const UserModel= mongoose.model('User', userSchema);
// Collection name
// User -> users -> db.users.find()

// DO NOT FORGET THIS - GAME OVER  😵
module.exports = UserModel;
// Connects the  model above to the routes file
