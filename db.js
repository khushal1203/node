const { MongoClient } = require('mongodb');

const url = 'mongodb://datanadminuser:jnaQTVd2mbQ3n5@195.201.195.230:27017/?authMechanism=DEFAULT';
let db = null;

async function connectDB() {
    if (db) return db;
    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('dataanant');
        console.log('Connected to MongoDB');
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = connectDB;
