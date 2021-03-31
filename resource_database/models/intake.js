const mongoose = require('mongoose');
// schema of the database
var resourceSchema = new mongoose.Schema({
    type: String,
    
});

//passed the schema to a mongoose model
module.exports = mongoose.model('intake', resourceSchema);
