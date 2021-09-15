const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;

module.exports = mongoose;