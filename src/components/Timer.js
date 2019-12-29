import React from 'react'


export default class Timer extends React.Component{

    state=({
        time: 0 
    })
    componentDidUpdate(){
     const {numberOfPairs,numbersPairsMatch }= this.props
        if(numberOfPairs-numbersPairsMatch ===0){
            clearInterval(this.myInterval)
            
        }
    }

    componentDidMount(){
            this.myInterval = setInterval(() => {
                this.setState(preState => ({
                    time: preState.time +1 
            }))
        }, 1000)
    }

    render(){
        return(<div><h3>Timer:{this.state.time}</h3></div>)
    }
}