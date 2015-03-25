// Database configuration setup using Mongo DB & Mongoose
var mongoose = require('mongoose');
// URI to Mongolab URI or localhost Mongo DB
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/ribbit';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Mongodb connection open");
});

module.exports = db;
