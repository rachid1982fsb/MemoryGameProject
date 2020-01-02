import React from 'react';
import Timer from './Timer'

export default class Result extends React.Component{

    state=({
        scoreDisplay: 0
    })

     PairsLeftToMatch=()=>{
        return   this.props.numberOfPairs-this.props.numbersPairsMatch 
    }

    render(){
    
            return(
                <>
                    <div>
                        <h3>Number Of Flips: {this.props.counter}</h3>
                    </div>
                    <div>
                        <h3> Pairs left to match: {this.PairsLeftToMatch()} </h3>
                    </div>
                    <Timer numberOfPairs={this.props.numberOfPairs} numbersPairsMatch={this.props.numbersPairsMatch } counter={this.props.counter} currentUserId={this.props.currentUserId}/>
                </>
                )
    }
}