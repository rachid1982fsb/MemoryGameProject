import React from 'react';
import Displaycards from '../components/DisplayCards';
import Images from '../data.js'
import ExtraImages from '../dataExtraImages.js'
import GameLevels from '../components/GameLevels';
import SelectImages from '../components/SelectImages'

// import { url } from 'inspector';
const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
// let id = 2
// const URL=`http://127.0.0.1:3000/users/${id}`

class Cards extends React.Component{

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
        // this.fetchImages()
    }

    // fetchImages=()=>{
    //     // let imageUrl=""
    //     fetch(URL)
    //     .then(resp => resp.json())
    //     .then(json => this.getImagesUrl(json.images))
     
    // }

    // getImagesUrl=(jsonImages)=>{
    //   let  urls = jsonImages.map(image =>  image.url)
    //   this.setState({
    //         gameImages: this.uniqueImagesList([...urls, ...ExtraImages])
    //     })
    // }

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
        switch(this.state.page) {
          case 'play':
            return <Displaycards  numberOfPairs={this.state.numberOfPairs} gameImages={this.state.gameImages} backImage={this.state.backImage} defaultCardImage={this.state.defaultCardImage} onHandleBackClick={this.handleBackClick} currentUser={this.props.currentUser ? this.props.currentUser : null}/>;
          case 'levels':
            return <GameLevels onHandelLevelClick={this.handelLevelClick} onHandelSelectImagesClick={this.handelSelectImagesClick}/>;
          case 'selectImages':
            return <SelectImages gameImages={this.state.gameImages} onHandleSubmitSelectedImages={this.handleSubmitSelectedImages} currentUserId={this.props.currentUser ? this.props.currentUser.id : null}/>
            default:
            return null;
        }
      }

    render(){

        return (this.renderPage())
    }
}

export default Cards

     