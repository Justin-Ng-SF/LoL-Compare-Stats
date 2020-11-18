import React from 'react'
import Summoner1 from './Summoner1'
import Summoner2 from './Summoner2'

function ResultsMainContent() {
    return (
        <div>
            <div className="summoner1">
                <Summoner1/>
            </div>
            <div className="summoner2">
                <Summoner2/>
            </div>
        </div>
    )
}

export default ResultsMainContent