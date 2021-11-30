const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");


const app = express();

app.use(cors())
app.use(express.static(path.resolve('./client')));


app.get('/table-data', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8');
    res.send(data)
})
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
})

app.listen(process.env.PORT || 80, () => {
    console.log("server is listening on port 3000");
});
