import React from 'react';
import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'

class OneCard extends React.Component{
    
    // state=({
        // srcSRC: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
    // })


    state=({
        visebleImage: this.props.srcSRC
    })
    
    handleClick=()=>{
        this.setState({
            visebleImage: this.props.image
        })
        this.props.onCheckMatching(this.props.image)
    }


    render(){
        return (
            <Card style={{backgroundImage: `url(${this.state.visebleImage})`}} onClick={()=>this.handleClick()} >
                <img height="200px" width="200px" />     
            </Card>
        )
    }
   
}
export default OneCard