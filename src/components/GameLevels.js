import React from 'react' 
import OneGameLevel from './OneGameLevel'



const GameLevels = (props) => {

const levels=[{name: "Very Easy",pairs: 3}, {name: "Easy",pairs: 6}, {name: "Medium",pairs: 9}, {name: "Hard",pairs: 12}]

const mapLevels=()=>{
    return levels.map((level, index) =>  <OneGameLevel key={index} level={level} id={index} onHandelLevelClick={props.onHandelLevelClick} onHandelSelectImagesClick={props.onHandelSelectImagesClick}/>)
}




    return(<>
            <h2 className="ui block header">
              <a href="/" >Home </a> | {props.currentUser ? <><a href="/" >LogOut </a> | <a path="/user" onClick={()=>props.onHandleClick("userProfile")} > Profile </a> </>: <> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </>}
            </h2>
            <div className="ui special cards" >
                  {mapLevels()}
            </div>
            </>
    )
}

export default GameLevels

 