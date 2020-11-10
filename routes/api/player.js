const { default: Axios } = require("axios")
var api_key = 'RGAPI-ae0087db-89f9-48e2-b705-e4976aaf3102'
// var name = 'LogicXD'
// var champion = 'LeeSin'

test('LogicXD', 'Ahri')
test('Skyzrice', 'Ahri')

async function test(name, champion) {
    let championURL = 'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'
    
    let champions = await new Promise((resolve, reject) => {
        Axios.get(championURL).then(res => {
            resolve(res.data)
        })
    })
    
    let championsArray = Object.values(champions.data)
    let championId = findKeyFromChampion(championsArray, champion)
    //console.log(championId)

    let sumURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name +
    '?api_key=' + api_key

    let summoner = await new Promise((resolve, reject) => {
        Axios.get(sumURL).then(res => {
            resolve(res.data)
        })
    })
    
    let leagueURL = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner.id + '?api_key=' + api_key

    let league = await new Promise((resolve, reject) => {
        Axios.get(leagueURL).then(res => {
            resolve(res.data)
        })
    })

    let matchesURL = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + summoner.accountId + '?champion=' + championId + '&api_key=' + api_key
    let matches = await new Promise((resolve, reject) => {
        Axios.get(matchesURL).then(res => {
            resolve(res.data)
        })
    })

    let matchesLength = matches.endIndex
    let gameIds = new Array(matchesLength)

    let kills = new Array(matchesLength)
    let deaths = new Array(matchesLength)
    let assists = new Array(matchesLength)
    let totalDamageDealt = new Array(matchesLength)
    let goldEarned = new Array(matchesLength)
    let minions = new Array(matchesLength)
    let visionScore = new Array(matchesLength)
    let wins = 0
    
    for (i = 0; i < matchesLength; i++) {
        gameIds[i] = matches.matches[i].gameId
    }

    for (i = 0; i < matchesLength; i++) {
        //console.log("i: " + i)
        let gameURL = 'https://na1.api.riotgames.com/lol/match/v4/matches/' + gameIds[i] + '?api_key=' + api_key
        game = await new Promise((resolve, reject) => {
            Axios.get(gameURL).then(res => {
                resolve(res.data)
            })
        })
        let participants = game.participantIdentities
        let participantStats = 0
        for (j = 0; j < 10; j++) {
            try {
                var nameFound = participants[j].player.summonerName
                //console.log("j:" + j + " " + nameFound)
              }
              catch(err) {
                  var nameFound = "default"
                  //console.log("error retrieving name")
              }

            if (nameFound == name) {
                participantStats = game.participants[j].stats
                kills[i] = participantStats.kills
                deaths[i] = participantStats.deaths
                assists[i] = participantStats.assists
                totalDamageDealt[i] = participantStats.totalDamageDealtToChampions
                goldEarned[i] = participantStats.goldEarned
                visionScore[i] = participantStats.visionScore
                try {
                    minions[i] = participantStats.totalMinionsKilled //+ participantStats.neutralMinionsKilledTeamJungle + participantStats.neutralMinionsKilledEnemyJungle
                }
                catch {
                    console.log("no minions killed")
                }   
                if (participantStats.win) {wins++}
            }
        }
    }

    let avgKills = getAvg(kills)
    let avgDeaths = getAvg(deaths)
    let avgAssists = getAvg(assists)
    let avgDmg = getAvg(totalDamageDealt)
    let avgGold = getAvg(goldEarned)
    let avgMinions = getAvg(minions)
    let avgVision = getAvg(visionScore)

    let sumId = summoner.id
    let accId = summoner.accountId
    let sumLvl = summoner.summonerLevel
    let rankedFlex = league[0]
    let rankedSolo = league[1]
    let flexTier = rankedFlex.tier
    let flexRank = rankedFlex.rank
    let soloTier = rankedSolo.tier
    let soloRank = rankedSolo.rank
    let flexWins = rankedFlex.wins
    let flexLosses =rankedFlex.losses
    let soloWins = rankedSolo.wins
    let soloLosses = rankedSolo.losses

    console.log('SUMMONER INFO FOR ' + name + ' :\n')
    console.log('Summoner Id: ' + sumId)
    console.log('Summoner Level: ' + sumLvl)
    console.log('Account Id: ' + accId)
    console.log('Ranked Flex: ' + flexTier + ' ' + flexRank)
    console.log('Ranked Solo: ' + soloTier + ' ' + soloRank)
    console.log('Wins (Flex): ' + flexWins)
    console.log('Losses (Flex): ' + flexLosses)
    console.log('Wins (Solo): ' + soloWins)
    console.log('Losses (Solo): ' + soloLosses + '\n')

    console.log('Champion Stats for ' + champion + ' over ' + matchesLength + ' games\n')

    console.log('Kills: ' + avgKills)
    console.log('Deaths: ' + avgDeaths)
    console.log('Assists: ' + avgAssists)
    console.log('Damage Dealt: ' + avgDmg)
    console.log('Gold Earned: ' + avgGold)
    console.log('Minions Killed: ' + avgMinions)
    console.log('Vision Score: ' + avgVision)
    console.log('Wins: ' + wins)
    console.log('Losses ' + (matchesLength - wins))


}

function getAvg(arr) {
    const total = arr.reduce((a, b) => a + b, 0)
    return Math.round(total / arr.length)
}

function findKeyFromChampion(array, champion) {
    try {
        for (i = 0; i < array.length; i++) {
            //console.log(array[i].id)
            if (array[i].id == champion) {
                return array[i].key
            }
        }
    }
    catch {
        console.log("Champion search failed")
    }
}

