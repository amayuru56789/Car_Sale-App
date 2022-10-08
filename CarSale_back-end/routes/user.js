const express = require('express')

const router = express.Router()
app.use(express.json());

router.get('/', (req, res) => {
    res.send('user get')
});

router.post('/', (req, res) => {
    res.send('user post method')
});

router.delete('/', (req, res) => {
    res.send(req.query.id)
});

module.exports = router