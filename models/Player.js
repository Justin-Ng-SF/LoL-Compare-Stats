//Used to interact with database
//used to hold different fields that Player will have

const mongoose = require('mongoose');

//schema
const PlayerSchema = new mongoose.Schema({
    leagueID: {
        type: String,
        required: true
    }, 
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // }
    icon: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = User = mongoose.model('player', PlayerSchema);