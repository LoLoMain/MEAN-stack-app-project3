const mongoose = require('mongoose');


const ClassModel = require ('./class-model.js');


const Schema = mongoose.Schema;
const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
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
    required: true
  },
  teamId: {
    type: Schema.Types.ObjectId,
  },
  class: ClassModel.schema
},
{
  timestamps: true
  // timestamp creates: "createdAt" & "updatedAt"
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
