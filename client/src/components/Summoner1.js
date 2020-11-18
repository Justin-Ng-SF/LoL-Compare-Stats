import React from 'react'

// placeholders data until it is imported
var name = 'LogicXD'
var kills = 6
var deaths = 6
var assists = 0
var damage = 12345
var gold = 5000
var vision = 10
var wins = 10

function Summoner1() {
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

export default Summoner1