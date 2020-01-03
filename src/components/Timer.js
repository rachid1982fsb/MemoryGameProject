import React from 'react'

const URL=`http://memorycardgamebackend.herokuapp.com/scores`
export default class Timer extends React.Component{

    state=({
        time: 0
    })

    componentDidUpdate(){
     const {numberOfPairs,numbersPairsMatch }= this.props
        if(numberOfPairs-numbersPairsMatch ===0){
            clearInterval(this.myInterval)  
            // this.props.onScore(this.state.time)
        }
    }

    componentDidMount(){
            this.myInterval = setInterval(() => {
                this.setState(preState => ({
                    time: preState.time +1 
            }))
        }, 1000)
    }

    fineshMessage=()=>{
        this.fetchScore()
        return   `Great you finesh in ${this.props.counter} Flips. Score: ${this.score()}`
    }

    fetchScore =()=>{
        const gamelevel = this.props.numberOfPairs/3
        fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify({
            gamelevel: gamelevel,
            finish_time: this.state.time,
            number_of_flips: this.props.counter,
            user_id: this.props.currentUserId
          })
          }).then(function(resp) {
            if (Math.floor(resp.status/200) === 1) {
                console.log("Great ")
            } else {
              console.log("ERROR", resp)
            }
          })
    }
    

     score =()=>{
        const timePoints = (60 - this.state.time>0 ? 60 - this.state.time : this.props.counter+1)
        console.log((timePoints - this.props.counter)*this.props.numberOfPairs)
        return ((timePoints - this.props.counter)*this.props.numberOfPairs) 
    }

    render(){
        return(<div>
                    <h3>Timer:{this.state.time}</h3>
                    <h3>{this.props.numberOfPairs-this.props.numbersPairsMatch === 0 ? this.fineshMessage() : null}</h3>
                </div>)
    }
}