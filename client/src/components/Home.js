import React, { useEffect } from 'react';
//import axios from 'axios';
import { getChampions } from '../actions/champions';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './dropdown.css';



const Home = ({ getChampions, champions: { champions, loading } }) => {
  useEffect(() => {
    //getPost(match.params.id);
    getChampions();
  }, [getChampions]);

  var champlist = [];
  if (champions.length > 0) {
    for (var i = 0; i < champions.length; i++) {
      //var a = <option value={champions[i]}>{champions[i]}</option>;
      //var a = champions[i];

      //values is the unique id# of champion taken from riots api
      champlist.push({
        "id": Object.values(champions[i]),
        "champion": Object.keys(champions[i])
      });
    }
  }

  //if(champions)
  //console.log(Object.keys(champions[1]))


  // ({ [champion]: championInfo[champion].key})

  function getChampionAndPlayers() {
    var champId = document.getElementById("mySelect")?.value;
    var player1 = document.getElementById("player1")?.value;
    var player2 = document.getElementById("player2")?.value;
    console.log({
      player1: player1,
      player2: player2,
      champId: champId
    })
    
    return {
      player1: player1,
      player2: player2,
      champId: champId
    }
  }


  return (

    <div>
      <div>
        Pick a Champion
      </div>

      <select id="mySelect" size="1" >
        {/* <option>-- Champion --</option> */}
        {/*champlist = <option value={champions[i]}>{champions[i]}</option> */}
        {
          
          //champlist.map(champ => <option>{champ.champion}</option>)
          champlist.map(champ => <option value={champ.id}>{champ.champion}</option>)
          // Object.values(champlist)
        }
      </select>

      <form onSubmit={getChampionAndPlayers} action="endpointhere">
        <label>
          Player 1:
          <input type="text" id="player1" />
        </label>
        <br></br>
        <label>
          Player 1:
          <input type="text" id="player2" />
        </label>
        <br></br>
        <input type="submit"/>
      </form>

      {/* {<button onClick={getChampId}>
        click
      </button>} */}



    </div>
    
  )
}

  
Home.propTypes = {
  getChampions: PropTypes.func.isRequired,
  champions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  champions: state.champions
})


export default connect(mapStateToProps, { getChampions })(Home)
//getchampions allow class to use getchampions and maps it to /actions/champions.js

