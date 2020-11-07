const { default: Axios } = require("axios")

let api_key = 'RGAPI-b55d5a7f-a3b9-41db-8a53-0cfc74b028b1'
let name = 'LogicXD'
//let accID = 'HUsky1p1WYT4Cd6Xv5Aj12A0enNi0pGlipLnoOJA_lfalQ'

test()

async function test() {
    var sumURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name +
    '?api_key=' + api_key
    //var matchURL = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/'

    // var leagueURL = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/bwZASB8bJ6iQlskzEFZxsu3sBv-_cNV5pcsp8JupJ1j23KY?api_key=RGAPI-b55d5a7f-a3b9-41db-8a53-0cfc74b028b1'

    let summoner = await new Promise((resolve, reject) => {
        Axios.get(sumURL).then(res => {
            resolve(res.data)
        })
    })
    
    var leagueURL = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner.id + '?api_key=' + api_key

    let league = await new Promise((resolve, reject) => {
        Axios.get(leagueURL).then(res => {
            resolve(res.data)
        })
    })

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

    console.log('SUMMONER INFO FOR ' + name + ":\n")
    console.log('Summoner Id: ' + sumId)
    console.log('Summoner Level: ' + sumLvl)
    console.log('Account Id: ' + accId)
    console.log('Ranked Flex: ' + flexTier + " " + flexRank)
    console.log('Ranked Solo: ' + soloTier + " " + soloRank)
    console.log('Wins (Flex): ' + flexWins)
    console.log('Losses (Flex): ' + flexLosses)
    console.log('Wins (Solo): ' + soloWins)
    console.log('Losses (Solo): ' + soloLosses)
    
}