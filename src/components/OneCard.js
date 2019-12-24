import React from 'react';
import { Card } from 'semantic-ui-react'

class OneCard extends React.Component{
    
  


    render(){
        return (
            <Card style={{backgroundImage: `url(${Object.values(this.props.srcSRC)[0]})`}} onClick={()=>this.props.onHandleClick(this.props.id)} >
                <img height="200px" width="200px" alt=""/>     
            </Card>
        )
    }
   
}
export default OneCard