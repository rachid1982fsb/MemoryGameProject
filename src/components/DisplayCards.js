import React from 'react';
import OneCard from './OneCard'
import Result from './Result'
// import {Card } from 'semantic-ui-react'

        

const blanc= "https://cdn.themeasuredmom.com/wp-content/uploads/2013/04/back-of-memory-cards.jpg"

class Displaycards extends React.Component{
    
    state=({
        gameImages: this.props.gameImages.slice(0, this.props.numberOfPairs),
        defaultCardImage: this.props.defaultCardImage,
        firstCardFiled: false,
        message: "Click on a Image.",
        preCardId:"",
        blankImage: false, 
        rendomCards: [],
        counter: 0,
        pairsMatch: 0
    })

    componentWillMount(){
        this.setRendomCards()
    }

    setRendomCards = ()=>{
        let arr=[]
        for(let i=0; i<this.props.numberOfPairs; i++){
            let h={}
            h[i]= this.state.defaultCardImage
            arr.push(h)
        }
        let urls= [...arr, ...arr]
        this.setState({
            rendomCards: urls.sort((a, b)=>{return 0.5 - Math.random()})
        }) 
    }

    changeMassege() {
        this.setState({message: "Pick one more card."})
    }


    urlImageId=(id)=>{
        let urlId =  Object.keys(this.state.rendomCards[id])[0]
        return urlId
    }


    flipCardBack=(id, urlId)=>{
        let newArray = this.state.rendomCards
        newArray[id]={[urlId]: this.state.defaultCardImage}
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
           let preCardId=this.urlImageId(this.state.preCardId)
           if(cardId !== preCardId ){
            this.flipCardBack(id, cardId)
            this.flipCardBack(this.state.preCardId, preCardId)
            this.setState({
                firstCardFiled: false,
                message: "Click on a Image.",
                preCardId:""
            })
           }else if(cardId === preCardId && id !== this.state.preCardId){
            this.flipCardToBlanc(id,cardId)
            this.flipCardToBlanc(this.state.preCardId, preCardId)
            let match= this.state.pairsMatch
            this.setState({
                pairsMatch: match + 1,
                firstCardFiled: false,
                message: "Click on a Image.",
                preCardId:""
            })
           }
    }

    addImageforChecking=(id)=>{
        this.setState({firstCardFiled: true})
        
        this.setState({preCardId: id})
    }

    beforCompare=(id)=>{
        let count = this.state.counter
        this.setState({
            counter: count+1
        })
        setTimeout(() => this.compareImage(id), 300) 
    }

    isItSecondFlip=(id)=>{
        this.state.firstCardFiled ? this.beforCompare(id): this.addImageforChecking(id) 
    }

    flipCard=(id)=>{
        let newArray = this.state.rendomCards
        newArray[id]={[this.urlImageId(id)]: this.state.gameImages[this.urlImageId(id)]}
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
        
        return this.state.rendomCards.map((card, index) => <OneCard onHandleClick={this.handleClick} srcSRC={card} id={index} key={index} onCheckMatching={this.checkMatching} preCardId={this.state.preCardId}/>
            )
        }

    render(){
            return ( 
                <> 
                <h2 class="ui block header"> <a href="/" >Home </a> | {this.props.currentUser ? <a href="/" >LogOut </a> : <a> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </a>}| <a href="/user" > Profile</a></h2>
                    <div className="App-header">
                        <div>{this.props.currentUser ? <img src={blanc} alt="HTML5" style={{width:"150px", height:"150px"}} /> : "" }</div>
                        <Result counter={this.state.counter} numbersPairsMatch={this.state.pairsMatch} numberOfPairs={this.props.numberOfPairs} currentUserId={this.props.currentUser ? this.props.currentUser.id : null}/>
                    </div><br/>
                    <div className="ui four cards">
                        {this.mapCards()}
                    </div><br/>
                    <div>
                        <button className="ui button" onClick={() => this.props.onHandleBackClick()}>Change Game Level</button>
                    </div>
                </>
        )
    }
 
}





export default Displaycards
