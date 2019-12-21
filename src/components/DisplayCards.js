import React from 'react';
import OneCard from './OneCard'
import DisplayOneCard from './DisplayOneCard'

import Test from './Test'
import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'
        

const srcSRC= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
const blanc= "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=regularsrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwNzE3NH0"

class Displaycards extends React.Component{

    state=({
        imagesUrls: this.props.imagesUrl.slice(0, this.props.numberOfCards),
        backImages: [...this.props.backImage.slice(0, this.props.numberOfCards)],
        firstImageFiled: false,
        matchingImage: "",
        message: "Click on a Image.",
        preImageId:"",
        blankImage: blanc
    })

    changeMassege() {
        this.setState({message: "Pick one more card."})
    }
    compareImage=(id)=>{
            this.changeMassege()

           if(id !== this.state.preImageId ){
            this.setState({backImages: [...this.props.backImage.slice(0, this.props.numberOfCards)],
                firstImageFiled: false,
                message: "Click on a Image.",
                preImageId:""
            })

           }
    }

    addImageforChecking=(id)=>{
        this.setState({firstImageFiled: true})
        this.setState({preImageId: id})
    }

    waitASecond=(id)=>{
        setTimeout(() => this.compareImage(id), 1000) 
    }

    checkMatching=(id)=>{
        this.state.firstImageFiled ? this.waitASecond(id): this.addImageforChecking(id) 
    }

    handleClick=(id)=>{
        let newArray = this.state.backImages
        newArray[id]=this.state.imagesUrls[id]
        this.setState({
            backImages: newArray
        })
        this.checkMatching(id)
    }
  

    mapCards=()=>{
        return this.state.imagesUrls.map((image, index) => <DisplayOneCard onHandleClick={this.handleClick} srcSRC={this.state.backImages[index]}  key={index} id={index} onCheckMatching={this.checkMatching} preImageId={this.state.preImageId}/>
            )
        }

    render(){
            return ( 
                <>
                    <button class="ui primary button"> Play</button>
                    <button class="ui button"> Cancel </button>
                    <Card.Group> {this.mapCards()}</Card.Group>
                </>
        )
    }
 
}

export default Displaycards
//<div className="test">
            
{/* <div class="ui container"> */}
  //  <div class="ui grid">
   //     <div class="row">
          //  {mapCards()}
    //    </div>
  //  {/* </div> */}
   
//</div>   
  
//</div>