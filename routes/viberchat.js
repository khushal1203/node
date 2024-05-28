const express = require('express');
const router = express.Router();
const connectDB = require('../db');

// Route to get data from the 'viberchat' collection
router.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const viberchatCollection = db.collection('viberchat');
        const result = await viberchatCollection.find({_id: "raidlayer"}).toArray();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error accessing viberchat collection:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
