const express = require('express');
const router = express.Router();
const axios = require('axios');

//following url is provided by riot developer website, https://developer.riotgames.com/docs/lol#data-dragon_champions

const championListURLBACKUP = 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';

const patchURL = 'https://ddragon.leagueoflegends.com/api/versions.json';

// gets list of champions
router.get('/', async (req, res) => {
  try {
    const currentPatch = (await axios.get(patchURL))?.data[0];
    let championData = '';
    if (currentPatch) {
      championData = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/data/en_US/champion.json`);
    }
    else championData = championListURLBACKUP;

    //data of all champions
    const championInfo = championData.data.data;

    const listOfChampions = [];
    for (var champion in championInfo) {
      //listOfChampions.push(champion)
      listOfChampions.push({ [champion]: championInfo[champion].key});
    }

    console.log(typeof listOfChampions)
    res.send(listOfChampions);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'error 404' });
  }
})


module.exports = router;