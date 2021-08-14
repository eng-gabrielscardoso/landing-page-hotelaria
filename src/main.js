const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(port, () => {
    try{
        console.log(`Server running: http://localhost:${port}/`)
    } catch(e) {
        console.log(`An error occuried. Log: ${e}.`);
    };
});