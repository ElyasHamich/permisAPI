const express = require('express');
const fs = require('fs');




const app = express();

app.get('/', (req,res) => {
    res.status(200).json({
        test:"eerste test",
        test2: "tweede test",
        img: '/img/kaka.png'
    })
});

app.get('/img')


app.use(express.static(__dirname + '/img'));

app.use(express.static(__dirname + '/audio'));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listenig on port ${port}`));