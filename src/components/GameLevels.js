import React from 'react' 
import OneGameLevel from './OneGameLevel'



const GameLevels = (props) => {

const levels=[{name: "Very Easy",pairs: 3}, {name: "Easy",pairs: 5}, {name: "Medium",pairs: 6}, {name: "Hard",pairs: 10}]

const mapLevels=()=>{
    return levels.map((level, index) =>  <OneGameLevel key={index} level={level} id={index} onHandelLevelClick={props.onHandelLevelClick} onHandelSelectImagesClick={props.onHandelSelectImagesClick}/>)
}



    return(
                <div className="ui special cards" >
                  {mapLevels()}
                </div>
    )
}

export default GameLevels

 