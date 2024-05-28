const express = require('express');
const viberchatRouter = require('./routes/viberchat');

const app = express();
const port = process.env.PORT || 8001;

app.use('/api/viberchat', viberchatRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Viber Chat API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
