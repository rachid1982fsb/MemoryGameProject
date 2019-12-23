import React from 'react';
import OneCard from './OneCard'
import {Card } from 'semantic-ui-react'
        

// const srcSRC= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
const blanc= "https://cdn.themeasuredmom.com/wp-content/uploads/2013/04/back-of-memory-cards.jpg"

class Displaycards extends React.Component{

    state=({
        imagesUrls: this.props.imagesUrl.slice(0, this.props.numberOfCards),
        backImages: [...this.props.backImage.slice(0, this.props.numberOfCards)],
        firstImageFiled: false,
        matchingImage: "",
        message: "Click on a Image.",
        preImageId:"",
        blankImage: false, 
        rendomCards: [],
    })

    componentWillMount(){
        this.setRendomCards()
    }

    setRendomCards = ()=>{
        const backUrl = [...this.state.backImages]
        let arr = backUrl.map((e, i) =>{
                let h={}
                h[i]=e
                return h} )
        let urls= [...arr, ...arr]
        this.setState({
            rendomCards: urls.sort((a, b)=>{return 0.5 - Math.random()})
        }) 
    }

    changeMassege() {
        this.setState({message: "Pick one more card."})
    }


    urlImageId=(id)=>{
        console.log(this.state.rendomCards[id])
        let urlId =  Object.keys(this.state.rendomCards[id])[0]
        return urlId
    }


    flipCardBack=(id, urlId)=>{
        let newArray = this.state.rendomCards
        newArray[id]={[urlId]: this.state.backImages[urlId]}
        this.setState({
            rendomCards: newArray
        })
    }
    flipCardToBlanc=(id, urlId)=>{
        let newArray = this.state.rendomCards
        newArray[id][urlId]=blanc
        this.setState({
            rendomCards: newArray
        })

    }
    compareImage=(id)=>{
           this.changeMassege()
           let cardId=this.urlImageId(id)
           let preCardId=this.urlImageId(this.state.preImageId)
           if(cardId !== preCardId ){
            this.flipCardBack(id, cardId)
            this.flipCardBack(this.state.preImageId, preCardId)
            this.setState({
                firstImageFiled: false,
                message: "Click on a Image.",
                preImageId:""
            })
           }else{
            this.flipCardToBlanc(id,cardId)
            this.flipCardToBlanc(this.state.preImageId, preCardId)
            this.setState({
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

    beforCompare=(id)=>{
        setTimeout(() => this.compareImage(id), 500) 
    }

    isItSecondFlip=(id)=>{
        this.state.firstImageFiled ? this.beforCompare(id): this.addImageforChecking(id) 
    }
    flipCard=(id)=>{
        let newArray = this.state.rendomCards
        newArray[id]={[this.urlImageId(id)]: this.state.imagesUrls[this.urlImageId(id)]}
        this.setState({
            rendomCards: newArray
        })
    }
    handleClick=(id)=>{
        // changing the state withoutuseing setstate!!!!! just by assinging new array to the state 
        if(this.state.rendomCards[id][this.urlImageId(id)]!== blanc){
            this.flipCard(id)
            this.isItSecondFlip(id)
        }
    }
  
 

    mapCards=()=>{
        return this.state.rendomCards.map((card, index) => <OneCard onHandleClick={this.handleClick} srcSRC={card} id={index} key={index} onCheckMatching={this.checkMatching} preImageId={this.state.preImageId}/>
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
