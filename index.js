const express = require('express');
const router = express.Router();
const db = require('./db'); // Assuming db.js contains your database connection setup
const app = express();
const port = 8001;

router.get('/', async (req, res) => {
    try {
        const dbName = 'viberchatbot';
        const collection = db.collection(dbName);

        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "status": false, "error": "Internal server error" });
    }
});

// Mount the router at the /api path
app.use('/', router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
