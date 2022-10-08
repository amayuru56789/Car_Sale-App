const express = require('express')
const app = express()

const port = 4000;

// if we use json obejct inside our app.js
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Get Request has come');
    res.send('Hello world!');
});




app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});