// const express = require('express');
// const router = express.Router();


// const api = require('../../config/riotapi.json').api;



// module.exports = router;




// Axios.defaults.timeout = 5000;
let api_key = 'RGAPI-b55d5a7f-a3b9-41db-8a53-0cfc74b028b1'
//u = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skyzrice?api_key=RGAPI-b55d5a7f-a3b9-41db-8a53-0cfc74b028b1'
//var accId = 'HUsky1p1WYT4Cd6Xv5Aj12A0enNi0pGlipLnoOJA_lfalQ'
//let champion = '64'


const { default: Axios } = require("axios")

function summonerSearch(url) {
    let summonerPromise = 
        Axios
            .get(url)
            .catch((error) => console.log(error));
    Promise
        .all([summonerPromise])
        .then((responses) => {
            let summonerResponse = responses[0];
            if (summonerResponse.status == 200) {
                handleSummonerFound(summonerResponse.data.summonerLevel, 
                    summonerResponse.data.id)
            }
            else {
                console.log(error)
            }
        })
}

function handleSummonerFound(level, id) {
    document.body.innerHTML = 'level:' + level + '\n id' + id
}

function handlePromise() {
    Promise
        .all(getAccountId())
        .then(response => {
            let accountId = response
            console.log(accountId)
        })
}

// this function returns => Encrypted account ID. Max length 56 characters.
function getAccountId() {
    var url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
    var name = 'Skyzrice'
    var newURL = url + name + '?api_key=' + api_key
    Axios.get(newURL).then(res => {
        return res.data.accountId
    })
}

// this function returns => List[MatchReferenceDto]	
function getMatchList() {
    var url = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/'
    var newURL = url + accID + '?champion='+ champion + '&api_key=' + api_key
    Axios.get(newURL)
    .then(res => {
        res.data.matches.forEach(match => console.log(match.gameId))
    })
    
}


// returns information from MatchDto
function getInfoFromMatch(name, match) {

}