import React from 'react';
import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'

class OneCard extends React.Component{
    
  


    render(){
        return (
            <Card style={{backgroundImage: `url(${this.props.visibleImage})`}} onClick={()=>this.props.onHandleClick(this.props.id)} >
                <img height="200px" width="200px" />     
            </Card>
        )
    }
   
}
export default OneCard