const express = require('express');
const router = express.Router();
const connectDB = require('../db');

router.get('/', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection('viberchatbot');
        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "status": false, "error": "Internal server error" });
    }
});
module.exports = router;
