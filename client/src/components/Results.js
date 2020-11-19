import React from 'react'

var name = 'LogicXD'
var kills = 10
var deaths = 10
var assists = 10
var damage = 1000
var gold = 1000
var vision = 10
var wins = 50

var name2 = 'JstAzn'
var kills2 = 20
var deaths2 = 20
var assists2 = 20
var damage2 = 2000
var gold2 = 2000
var vision2 = 20
var wins2 = 100

function Results() {
    return (
        <div>
            <header>Results</header>
            <body>
                <div className="summoner1">
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
                </div>
                <div className="summoner2">
                    <div>
                        <div className="summonerName">
                            <h1>{name2}</h1>
                        </div>
                        <ul className="summonerInfo">
                            <li>KDA: {kills2}/{deaths2}/{assists2}</li>
                            <li>Damage Dealt: {damage2}</li>
                            <li>Gold: {gold2}</li>
                            <li>Vision: {vision2}</li>
                            <li>Win Rate: {wins2}</li>
                        </ul>
                    </div>
                </div>
            </body>
            <footer>This is a test footer</footer>
        </div>
    )
}

export default Results