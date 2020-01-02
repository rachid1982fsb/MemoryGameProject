import React from 'react';
import Displaycards from '../components/DisplayCards';
import Images from '../data.js'
import ExtraImages from '../dataExtraImages.js'
import GameLevels from '../components/GameLevels';
import SelectImages from '../components/SelectImages'

const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"

export default class Cards extends React.Component{

    constructor(){
        super()
        this.state=({
            defaultCardImage: flatirLogo,
            numberOfPairs: 8,
            gameImages: Images,
            page: "levels"
        })
    
    }

    componentDidMount(){
        if(this.props.currentUser && this.props.currentUser.images){
        let userImages = this.props.currentUser.images.map(image=> image.url)
        this.setState({
            gameImages: this.uniqueImagesList([...userImages, ...ExtraImages, ...Images])
        })
    }
    }

    handelLevelClick=(numberPairs)=>{
        this.setState({
            numberOfPairs: numberPairs,
            page: "play"
        }) 
    }

    handleBackClick=()=>{
        this.setState({
            page: "levels",
            gameImages: Images
        }) 
    }

    handelSelectImagesClick=(numberPairs)=>{
        this.setState({
            numberOfPairs: numberPairs,
            page: "selectImages"
        })
    }
    uniqueImagesList = (urls) => {
        return [...new Set(urls)];
      }

    handleSubmitSelectedImages=(images)=>{
       this.setState({
        gameImages: this.uniqueImagesList([...images, ...ExtraImages]),
        page: "play"
       })
    }


    renderPage=()=>{
        const {numberOfPairs, gameImages, backImage, defaultCardImage, page } = this.state

        switch(page) {
          case 'play':
            return <Displaycards  numberOfPairs={numberOfPairs} gameImages={gameImages} backImage={backImage} defaultCardImage={defaultCardImage} onHandleBackClick={this.handleBackClick} currentUser={this.props.currentUser ? this.props.currentUser : null} onHandleClick={this.props.onHandleUserClick}/>;
          case 'levels':
            return <GameLevels onHandelLevelClick={this.handelLevelClick} onHandelSelectImagesClick={this.handelSelectImagesClick} currentUser={this.props.currentUser ? this.props.currentUser : null} onHandleClick={this.props.onHandleUserClick}/>;
          case 'selectImages':
            return <SelectImages gameImages={gameImages} onHandleSubmitSelectedImages={this.handleSubmitSelectedImages} currentUser={this.props.currentUser ? this.props.currentUser : null} onHandleBackClick={this.handleBackClick} onHandleClick={this.props.onHandleUserClick}/>
            default:
            return null;
        }
      }

    render(){

        return (this.renderPage())
    }
}

     