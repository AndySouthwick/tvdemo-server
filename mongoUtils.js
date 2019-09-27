const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://admin:passwordone@cluster0-khw7n.mongodb.net/test?retryWrites=true&w=majority";

let _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
      _db  = client.db('test_db');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};