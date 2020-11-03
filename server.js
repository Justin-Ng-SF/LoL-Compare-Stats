const express = require('express');
const connectDB = require('./config/db');
const path = require('path');//core nodejs module to manipulate paths
const axios = require("axios");
const app = express();

const config = require('config');
const api = config.get('riotapi');


//connect to mongodb database
connectDB();

const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=${api}`;


// app.get('/', (req, res) => res.send(
//     axios.get(url).then(res => {
//         console.log('data: ', res.data)
//     })    
// ));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));