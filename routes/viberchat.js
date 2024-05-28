// routes/viberchat.js

const express = require('express');
const router = express.Router();
const { viberchatCollection } = require('../db');// Import the connectDB function

// Route to get data from the 'viberchat' table
router.get('/', async (req, res) => {
    try {
        
        const result = await viberchatCollection.find({_id:"raidlayer"}).toArray();
        console.log(result);
        res.json(result);
        // Don't forget to close the connection when done
        connection.disconnect();

        res.json(result);
    } catch (error) {
        console.error('Error accessing viberchat table:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
