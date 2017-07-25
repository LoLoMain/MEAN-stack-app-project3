const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
      type: String,
      required: [true]
    },
    userIds:
      [ { type: Schema.Types.ObjectId}],
    teamPoints: {
      type: Number
    }
    },
 {
  timestamps: true
}
);


// Model
// constructor function that alows us to interact with a single collection
const TeamModel= mongoose.model('Team', teamSchema);
// Collection name
// Team -> teams -> db.teams.find()

// DO NOT FORGET THIS - GAME OVER  😵
module.exports = TeamModel;
// Connects the  model above to the routes file
