const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    gradeLevel: {
      type: String,
    },
    students: {
        type:Array
    },
    points: {
        type: Number
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


// name: 'Jerrold Larocca'
// name:'Stephaine Murawski'
// name:'Junie Manges'
// name:'Mendy Holmquist'
// name:'Lieselotte Gettinger'
// name:'Coralie Wenrich'
// name:'Terisa Hofer'
//
// name:'Shalon Constable'
// name:'Celestina Kohr'
// name:'Leah Tiernan'
// name:'Kanesha Simonsen'
// name:'Regena Rendell'
// name:'Craig Flanary'
// name:'Rebecca Echavarria'
