// grab the mongoose module
var mongoose = require('mongoose');

// Defining the Ingredients
module.exports = mongoose.model('Ingredients', {
	name : {type : String},
	calorieValue : {type : Number}
});
