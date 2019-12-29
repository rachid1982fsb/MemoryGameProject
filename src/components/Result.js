import React from 'react';
import Timer from './Timer'

const Result=(props)=>{


    const PairsLeftToMatch=()=>{
        return   props.numberOfPairs-props.numbersPairsMatch 
    }

    const fineshMessage=()=>{
        return   props.numberOfPairs-props.numbersPairsMatch === 0 ? `Great you finesh in ${props.counter} Tries ` : ""
    }
    

    
    return(
           <>
           <Timer numberOfPairs={props.numberOfPairs} numbersPairsMatch={props.numbersPairsMatch }/>
           <div>
           <h3>Number Of Tries: {props.counter}</h3>
           </div>
           <div>
          <h3> Pairs left to match: <h2>{PairsLeftToMatch()}</h2></h3>
           </div>
           <div><h2>{fineshMessage()}</h2></div>
           </>)
}

export default Result