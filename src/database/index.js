const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapi', {useMongoClient:true});
mongoose.Promise = global.Promise;

module.exports = mongoose;