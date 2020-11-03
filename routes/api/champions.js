const express = require('express');
const router = express.Router();
const axios = require('axios');



//following url is provided by riot developer website, https://developer.riotgames.com/docs/lol#data-dragon_champions
const championListURL = 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';


// gets list of champions
router.get('/', async (req, res) => {
  try {
    const championData = await axios.get(championListURL);
    //data of all champions
    const championInfo = championData.data.data;

    const listOfChampions = [];
    for (var key in championInfo) {
      listOfChampions.push(key);
    }

    res.send(listOfChampions);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'error 404' });
  }
})


module.exports = router;