const express = require('express');
const router = express.Router();

const api = 'RGAPI-270ebe50-f897-49ff-b09b-37703d574a25';
const championListURL = 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';


router.get(championListURL, (req, res) => res.send('Player route'));

module.exports = router;