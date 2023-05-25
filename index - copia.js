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

app.get('/convert', (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
        params: {url: 'https://www.tiktok.com/@mistkff/video/7174194682635848966?is_from_webapp=1&sender_device=pc', hd: '0'},
        headers: {
            'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
            'x-rapidapi-key': 'bb92e3cbd8msh1757fc252f1a9bdp182d22jsn3b79d242ef4a'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        console.error(error);
    });
});

// ******** Aqui otra API *********


let dataso = '';

app.get('/news', (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark5.p.rapidapi.com/videodetail',
        params: {url: dataso},
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