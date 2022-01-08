const express = require('express');
const fs = require('fs');

const seeder = require('./seeder');
const app = express();


seeder.questions.forEach(function(item, index, array) {
    console.log(item, index);
    console.log("------------------------------------------");
});




app.get('/', (req,res) => {
    res.status(200).json(seeder.questions)
});

app.get('/img')


app.use(express.static(__dirname + '/img'));

app.use(express.static(__dirname + '/audio'));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenig on port ${port}`));