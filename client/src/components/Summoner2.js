import React from 'react'

// placeholders data until it is imported
var name = 'JstAzn'
var kills = 5
var deaths = 5
var assists = 1
var damage = 9999
var gold = 10000
var vision = 0
var wins = 20

function Summoner2() {
    return (
        <div>
            <div className="summonerName">
                <h1>{name}</h1>
            </div>
            <ul className="summonerInfo">
                <li>KDA: {kills}/{deaths}/{assists}</li>
                <li>Damage Dealt: {damage}</li>
                <li>Gold: {gold}</li>
                <li>Vision: {vision}</li>
                <li>Win Rate: {wins}</li>
            </ul>
        </div>
    )
}

export default Summoner2