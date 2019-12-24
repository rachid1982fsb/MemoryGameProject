import React from 'react';

const Result=(props)=>{


    const PairsLeftToMatch=()=>{
        return   props.numberOfPairs-props.numbersPairsMatch 
    }
    const fineshMessage=()=>{
        return   props.numberOfPairs-props.numbersPairsMatch === 0 ? `Great you finesh in ${props.counter} Tries ` : ""
    }


    return(
           <>
           <div>
           Number Of Tries: {props.counter}
           </div>
           <div>
           Pairs left to match: {PairsLeftToMatch()}
           </div>
           <div>{fineshMessage()}</div>
           </>)
}

export default Result