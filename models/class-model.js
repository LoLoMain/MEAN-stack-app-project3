const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    gradeLevel: {
      type: String,
    },
    students: {
        type:Array
    },
    teamworkPoints: {
        type: Number,
        default: 0
    },
    gradePoints: {
        type: Number,
        default: 0
    },
    readingPoints: {
        type: Number,
        default: 0
    },
    prepPoints: {
        type: Number,
        default: 0
    }
  });

// Model
// constructor function that alows us to interact with a single collection
const ClassModel= mongoose.model('Class', classSchema);
// Collection name
// Class -> classes -> db.classes.find()

// DO NOT FORGET THIS - GAME OVER  😵
module.exports = ClassModel;
// Connects the  model above to the routes file
