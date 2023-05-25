const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const api = `http://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${process.env.API_KEY}`;
app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /weather to see weather')
});

app.get('/weather', (req, res) => {
    axios.get(api)
        .then(response => { 
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        
});

let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});