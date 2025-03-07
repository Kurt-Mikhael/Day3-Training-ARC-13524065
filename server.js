const express =  require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    });
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
    });
app.get('/style.css', (req, res) =>
    res.sendFile(path.join(__dirname, 'style.css'))
    );

