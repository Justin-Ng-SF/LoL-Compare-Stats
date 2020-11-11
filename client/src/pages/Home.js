import React, { useEffect } from 'react';
//import axios from 'axios';
import { getChampions } from '../actions/champions';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './dropdown.css';



const Home = ({ getChampions, champions: { champions, loading }}) => {
  useEffect(() => {
    //getPost(match.params.id);
    getChampions();
    console.log(10, champions, loading)
}, [getChampions]);

  return (


      <div className="dropdown">
      <button className="dropbtn">Dropdown</button>

        <div className="dropdown-content">
        {champions}
        </div>

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


