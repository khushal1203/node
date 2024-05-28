const { MongoClient } = require('mongodb');
const url = 'mongodb://datanadminuser:jnaQTVd2mbQ3n5@195.201.195.230:27017/?authMechanism=DEFAULT';

let db = null;

async function connectToDatabase() {
    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('dataanant');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

connectToDatabase();

module.exports = {
    collection: (name) => db.collection(name),
};
