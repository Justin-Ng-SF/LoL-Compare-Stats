import React, { useEffect } from 'react';
//import axios from 'axios';
import { getPlayer } from '../actions/player';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const Results = ({ getPlayer, playerInfo, match }) => {
  useEffect(() => {
      getPlayer(match.params.player1, match.params.championid);
  });

  return (

    <div>
        test



    </div>
    
  )
}


Results.propTypes = {
  getPlayer: PropTypes.func.isRequired,
  playerInfo: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    playerInfo: state.playerInfo
})


export default connect(mapStateToProps, { getPlayer })(Results)
//getchampions allow class to use getchampions and maps it to /actions/champions.js


// import React from 'react'

// var name = 'LogicXD'
// var kills = 10
// var deaths = 10
// var assists = 10
// var damage = 1000
// var gold = 1000
// var vision = 10
// var wins = 50

// var name2 = 'JstAzn'
// var kills2 = 20
// var deaths2 = 20
// var assists2 = 20
// var damage2 = 2000
// var gold2 = 2000
// var vision2 = 20
// var wins2 = 100

// function Results() {
//     return (
//         <div>
//             <header>Results</header>
//             <body>
//                 <div className="summoner1">
//                     <div>
//                         <div className="summonerName">
//                             <h1>{name}</h1>
//                         </div>
//                         <ul className="summonerInfo">
//                             <li>KDA: {kills}/{deaths}/{assists}</li>
//                             <li>Damage Dealt: {damage}</li>
//                             <li>Gold: {gold}</li>
//                             <li>Vision: {vision}</li>
//                             <li>Win Rate: {wins}</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="summoner2">
//                     <div>
//                         <div className="summonerName">
//                             <h1>{name2}</h1>
//                         </div>
//                         <ul className="summonerInfo">
//                             <li>KDA: {kills2}/{deaths2}/{assists2}</li>
//                             <li>Damage Dealt: {damage2}</li>
//                             <li>Gold: {gold2}</li>
//                             <li>Vision: {vision2}</li>
//                             <li>Win Rate: {wins2}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </body>
//             <footer>This is a test footer</footer>
//         </div>
//     )
// }

// export default Results