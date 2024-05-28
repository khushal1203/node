const { MongoClient } = require('mongodb');
var url = 'mongodb://datanadminuser:jnaQTVd2mbQ3n5@195.201.195.230:27017/?authMechanism=DEFAULT';
let db = null;
try{
const client = new MongoClient(url);
client.connect();
db = client.db('dataanant');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 

	module.exports = db;
