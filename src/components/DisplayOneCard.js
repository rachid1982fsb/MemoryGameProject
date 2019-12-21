import React from 'react';
import OneCard from './OneCard'

import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'

class DisplayOneCard extends React.Component{
    
    // state=({
        // srcSRC: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
    // })


    // state=({
    //     visibleImage: this.props.srcSRC
    // })

    // handleClick=()=>{
    //     this.setState({
    //         visibleImage: this.props.image[this.props.id]
    //     })
    //     this.props.onCheckMatching(this.props.id)
    // }

    render(){
        return (
            <OneCard id={this.props.id}onHandleClick={this.props.onHandleClick} visibleImage={this.props.srcSRC}/>
        )
    }
   
}
export default DisplayOneCard