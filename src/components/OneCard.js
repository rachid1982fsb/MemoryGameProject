import React from 'react';
// import { Card } from 'semantic-ui-react'
const blanc= "https://cdn.themeasuredmom.com/wp-content/uploads/2013/04/back-of-memory-cards.jpg"

class OneCard extends React.Component{


    render(){
        return (
            // <div className="" style={{backgroundImage: `url(${Object.values(this.props.srcSRC)[0]})`}} onClick={()=>this.props.onHandleClick(this.props.id)} >
            <div className=""  onClick={()=>this.props.onHandleClick(this.props.id)} >
                {/* <img height="200px" width="200px" alt=""/>     */}
                <img src={Object.values(this.props.srcSRC)[0]} alt="HTML5" style={{width:"200px", height:"200px", borderRadius: 20, padding: 5}}/> 
            </div>
        )
    }
   
}
export default OneCard