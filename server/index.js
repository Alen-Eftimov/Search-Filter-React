const express = require('express');
const app = express();
const Users = require('./user.js')

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const { q } = req.query

    console.log(q)
    const keys = ['first_name', 'last_name', 'email'];

    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
    }

    // q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0,10))
    // q ? res.json(search(Users).slice(0, 20)) : res.json(Users.slice(0,10))
    q ? res.json(search(Users)) : res.json(Users.slice(0,10))

});

app.listen(5000, () => {
    console.log('API is working on port 5000!');
})
