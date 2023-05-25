// const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());

app.get('/', (req,res) => {
    res.send('Hola Bienvenido!!')
});



// ******** Aqui otra API *********

app.get('/api', (req,res) => {
    const options = {
        url: 'https://tiktok-video-no-watermark5.p.rapidapi.com/videodetail',
        params: {
            url: req.query.url
            // let q = req.query.q
        },
        headers: {
            'x-rapidapi-host': 'tiktok-video-no-watermark5.p.rapidapi.com',
            'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data);

    }).catch((error) => {
        console.error(error);
    });
});


let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});