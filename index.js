const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const db = require('./db'); // Ensure this path is correct

app.get('/', async (req, res) => {
    try {
        const dbName = 'viberchatbot';
        const collection = db.collection(dbName);

        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ status: false, error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
