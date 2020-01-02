import React from 'react';
import { tsPropertySignature } from '@babel/types';


const URL=`http://127.0.0.1:3000/images`

const UserProfile=(props)=>{


    const handleDeleteClick=(id)=>{
        fetchDelete(id)
        props.onHandleDeleteImage(props.currentUser.username)
    }

    const  fetchDelete=(id) =>{
        return fetch(URL + '/' + id, {
          method: 'delete'
        })
        .then(response => response.json())
        .then(json => console.log(json.message) )
        .catch(err => {
            console.error(err)
          });
      }

    const displayImage=(image,index)=>{
        return(
                <div className="card" key= {index}>
                    {/* <input type="checkbox"/> */}
                    <div className="ui bottom attached button" onClick={()=> handleDeleteClick(image.id)}>
                        Delete
                    </div>
                    <img src={image.url} alt="" style={{width:"300px", height:"300px" , borderRadius: 20, padding: 5}} /> 
                </div>
        )
    }

    const mapUserImages=()=>{
        return props.currentUser.images.map((image, index) => displayImage(image, index))
    }

    const calculateScore=(highScores)=>{
       return highScores.map(score => {
                        if(score){
                            const timePoint = (10 * score.gamelevel * score.gamelevel)-score.finish_time
                            const filpsPoint = 10*((10 * score.gamelevel)- score.number_of_flips)
                            return (timePoint* filpsPoint* score.gamelevel)
                        }
                        
                     })
    }

    const mapUserScores=()=>{
        const ScoresLevels=["Very Easy", "Easy", "Mediam", "Hard"]
        const veryEasyScore=(props.currentUser.scores.filter(score => score.gamelevel === "1"))[0]
        const EasyScore=(props.currentUser.scores.filter(score => score.gamelevel === "2"))[0]
        const MediamScore=(props.currentUser.scores.filter(score => score.gamelevel === "3"))[0]
        const hardScore=(props.currentUser.scores.filter(score => score.gamelevel === "4"))[0]
        const highScores=[veryEasyScore, EasyScore, MediamScore, hardScore]
        calculateScore(highScores)

        return ScoresLevels.map((level, index) =>  
                                                <div className="card" key={index}>
                                                    <div className="content">
                                                        <div className="header">Game Level: {level}</div>
                                                        <div className="description">
                                                        Score: {calculateScore(highScores)[index] ? calculateScore(highScores)[index]: null }
                                                        </div>
                                                    </div>
                                                </div>
                                          )
    }

    return(
        <>
            <h2 className="ui block header">
              <a href="/" >Home </a> | {props.currentUser ? <><a href="/" >LogOut </a> | <a  onClick={()=>props.onHandlePlayClick("loggedIn")} >Play </a></> : <> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </>}
            </h2>
            <div className="ui cards"> {mapUserScores()} </div>
                <div className="ui cards">{props.currentUser.id ? mapUserImages() : <h2>LogIn OR SignUp</h2> }</div>
             </>)

}

export default UserProfile