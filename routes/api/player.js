const { default: Axios } = require("axios")
const express = require('express')
const router = express.Router()

var api_key = 'RGAPI-3363731e-06dc-45e7-a524-094b0b91bd26'
//var name = 'LogicXD'
var key = '64'
var matchesLimit = 20

router.get('/:name', async (req, res) => {
    var name = req.params.name
    try {
        let sumURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name +
        '?api_key=' + api_key

        let summoner = await new Promise((resolve, reject) => {
            Axios.get(sumURL).then(res => {
                resolve(res.data)
            })
        })
        let matchesURL = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + summoner.accountId + '?champion=' + key + '&api_key=' + api_key
        let matches = await new Promise((resolve, reject) => {
            Axios.get(matchesURL).then(res => {
                resolve(res.data)
            })
        })
        let matchesLength = matches.endIndex
        if (matchesLength > matchesLimit) {
            matchesLength = matchesLimit
        }
        let gameIds = new Array(matchesLength)
        for (i = 0; i < matchesLength; i++) {
            gameIds[i] = matches.matches[i].gameId
        }

        let matchObjects = []

        for (let i = 0; i < matchesLength; i++) {
            let gameURL = 'https://na1.api.riotgames.com/lol/match/v4/matches/' + gameIds[i] + '?api_key=' + api_key
            game = await new Promise((resolve, reject) => {
                Axios.get(gameURL).then(res => {
                    resolve(res.data)
                })
            })
            let participants = game.participantIdentities

            let currentPlayer = participants.find( ({ player }) => player.summonerName.toLowerCase() == name.toLowerCase() )
            let currentId = currentPlayer.participantId
            
            let playerStats = game.participants[currentId].stats
            let matchObj = {
                kills: playerStats.kills,
                deaths: playerStats.deaths,
                assists: playerStats.assists,
                totalDamageDealt: playerStats.totalDamageDealtToChampions,
                goldEarned: playerStats.goldEarned,
                visionScore: playerStats.visionScore,
                win: playerStats.win
            }
            matchObjects.push(matchObj)
        }
        let avgMatchStats = getAvgMatchStats(matchObjects)
        console.log(avgMatchStats)
        res.send(avgMatchStats)
    } catch (err) {
        console.error(err.message);
        return res.status(404).json({ msg: 'error 404' })
    }
})
module.exports = router


function getAvgMatchStats(arr) {
    let avgKills = 0
    let avgDeaths = 0 
    let avgAssists = 0
    let avgDmg = 0
    let avgGold = 0 
    let avgVision = 0
    let numWins = 0
    let winRate = 0

    for (const match of arr) {
        avgKills += match.kills
        avgDeaths += match.deaths
        avgAssists += match.assists
        avgDmg += match.totalDamageDealt
        avgGold += match.goldEarned
        avgVision += match.visionScore
        if (match.win) {numWins++}
    }
    avgKills = Math.round(avgKills / arr.length)
    avgDeaths = Math.round(avgDeaths / arr.length)
    avgAssists = Math.round(avgAssists / arr.length)
    avgDmg = Math.round(avgDmg / arr.length)
    avgGold = Math.round(avgGold / arr.length)
    avgVision = Math.round(avgVision / arr.length)
    winRate = Math.round(numWins / arr.length * 100)

    let avgStats = {
        matches: arr.length,
        kills: avgKills,
        deaths: avgDeaths,
        assists: avgAssists,
        totalDamageDealt: avgDmg,
        goldEarned: avgGold,
        visionScore: avgVision,
        winRate: winRate
    }
    return avgStats
}