import React from 'react';
import OneCard from './OneCard'
import Test from './Test'
import { Button, Icon, Image, Grid, Card } from 'semantic-ui-react'
        

const srcSRC= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
const blanc= "https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=regularsrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwNzE3NH0"

class Displaycards extends React.Component{

    state=({
        firstImageFiled: false,
        matchingImage: "",
        message: "Click on a Image.",
        preImage:"",
        blankImage: blanc
    })

    changeMassege() {
        this.setState({message: "Pick one more card."})
    }
    compareImage=(image)=>{
            this.changeMassege()
        return  image !== this.state.preImage ? this.render() : null
    }

    addImageforChecking=(image)=>{
        this.setState({firstImageFiled: true})
        this.setState({preImage: image})
    }

    checkMatching=(image)=>{
        this.state.firstImageFiled ? this.compareImage(image) : this.addImageforChecking(image) 
    }
  

    mapCards=()=>{
        const imagesUrls = this.props.imagesUrl.slice(0, this.props.numberOfCards)
        const backImages = this.props.backImage.slice(0, this.props.numberOfCards)
        return imagesUrls.map((image, index) => <OneCard srcSRC={backImages[index]} image={image} key ={index} index={index} onCheckMatching={this.checkMatching}/>
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