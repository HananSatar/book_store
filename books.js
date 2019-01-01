const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	image_url:{
		type: String,
		require:true
	
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
module.exports = mongoose.model('Book', bookSchema);