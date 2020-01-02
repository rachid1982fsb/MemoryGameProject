import React from 'react';

export default class OneCard extends React.Component{


    render(){
        return (
            <div className=""  onClick={()=>this.props.onHandleClick(this.props.id)} >
                <img src={Object.values(this.props.srcSRC)[0]} alt="HTML5" style={{width:"200px", height:"200px", borderRadius: 20, padding: 5}}/> 
            </div>
        )
    }
   
}