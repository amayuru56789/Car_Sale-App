const express = require('express')
const app = express()
const user = require('./routes/user')
const mongoose = require('mongoose')

const port = 4000;

const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log('MongoDB connected!');
});

// if we use json obejct inside our app.js
app.use(express.json());
app.use('/user', user);

app.get('/', (req, res) => {
    console.log('Get Request has come');
    res.send('Hello world!');
});




app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});