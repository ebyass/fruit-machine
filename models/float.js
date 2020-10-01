
const mongoose = require('mongoose')


const floatSchema = new mongoose.Schema({
	value: {type: Number, required: true, maxlength: 1000000000 },

})


module.exports = mongoose.model('Float', floatSchema) //exporting the model to be used 