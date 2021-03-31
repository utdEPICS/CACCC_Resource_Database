const mongoose = require('mongoose');
// schema of the database
var resourceSchema = new mongoose.Schema({
    type: String,
    typeDisplay: String,
    name: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    hours: String,
    website: String,
    services: String,
    link: String,
    referrals: Number,
    successPercent: String, //% of referrals that are successful.
    //keys are strings for each reason, value is the number of fails for that reason.
    referralFails: {
        type: Map,
        of: Number
    },
    //  used to create search parameters for the database
    searchData: String,
    //contains names of all the uploaded files
    //keys are names, values are paths
    files: {
        type: Map,
        of: String
    }
});

//passed the schema to a mongoose model
module.exports = mongoose.model('resource', resourceSchema);
