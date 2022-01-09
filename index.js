const express = require('express');
const fs = require('fs');

const seeder = require('./seeder');
const app = express();



app.get('/', (req,res) => {
    res.status(200).json(seeder)
});

app.get('/img')


app.use(express.static(__dirname + '/img'));

app.use(express.static(__dirname + '/audio/F'));
app.use(express.static(__dirname + '/audio/N'));




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenig on port ${port}`));