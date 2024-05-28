const express = require('express');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.send('Welcome to the Viber Chat API');
});

app.get('/test', async (req, res) => {
    try {
        console.log('Handling /test route...');
        const db = await connectDB();
        const viberchatCollection = db.collection('viberchat');
        const result = await viberchatCollection.find({_id: "raidlayer"}).toArray();
        console.log('Query result:', result);
        res.json(result);
    } catch (error) {
        console.error('Error accessing viberchat collection:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Ensure that the router is correctly set up
const router = require('./router');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
