import React from 'react';
import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'



class Test extends React.Component{
    
    state=({
        srcSRC: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
    })

    handleClick=(image)=>{
        this.setState({
            srcSRC: image
        })
    }


    render(){
        const {image, srcSRC} = this.props
        return (
            <Card style={{backgroundImage: `url(${this.state.srcSRC})`}} onClick={()=>this.handleClick(image)} >
                <img height="200px" width="200" />     
            </Card>
        )
    }
   
}


export default Test