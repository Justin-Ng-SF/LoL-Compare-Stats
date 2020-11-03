const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');


const api = require('../../config/riotapi.json')

const championListURL = 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';


// router.get('/me', async (req, res) => {
//   return 'test'
// });
router.get('/', async (req, res) => {
  try {

    const championData = await axios.get(championListURL);
    //data of all champoins
    //use body.json for async
    const championInfo = res.json(championData.data.data);
    //const first = championInfo[0].type;

    res.send(Object.keys(championInfo));
    //return res.json(championlist.data);

  //   return res.json('github repo here');
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'error 404' });
  }


})


module.exports = router;