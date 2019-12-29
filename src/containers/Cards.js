import React from 'react';
import Displaycards from '../components/DisplayCards';
import Images from '../data.js'
import ExtraImages from '../dataExtraImages.js'
import GameLevels from '../components/GameLevels';
import SelectImages from '../components/SelectImages'

// import { url } from 'inspector';
const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    
let id = 2
const URL=`http://127.0.0.1:3000/users/${id}`

class Cards extends React.Component{

    constructor(){
        super()
        this.state=({
            defaultCardImage: flatirLogo,
            numberOfPairs: 8,
            gameImages: [],
            page: "levels"
        })
    
    }

    componentDidMount(){
        this.fetchImages()
    }

    fetchImages=()=>{
        // let imageUrl=""
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.getImagesUrl(json.images))
     
    }

    getImagesUrl=(jsonImages)=>{
      let  urls = jsonImages.map(image =>  image.url)
      this.setState({
            gameImages: urls
        })
    }

    handelLevelClick=(numberPairs)=>{
        console.log(this.state.numberOfPairs)
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

    handleSubmitSelectedImages=(images)=>{
       this.setState({
        gameImages: [...images, ...ExtraImages],
        page: "play"
       })
    }


    renderPage=()=>{
        switch(this.state.page) {
          case 'play':
            return <Displaycards  numberOfPairs={this.state.numberOfPairs} gameImages={this.state.gameImages} backImage={this.state.backImage} defaultCardImage={this.state.defaultCardImage} onHandleBackClick={this.handleBackClick}/>;
          case 'levels':
            return <GameLevels onHandelLevelClick={this.handelLevelClick} onHandelSelectImagesClick={this.handelSelectImagesClick}/>;
          case 'selectImages':
            return <SelectImages gameImages={this.state.gameImages} onHandleSubmitSelectedImages={this.handleSubmitSelectedImages}/>
            default:
            return null;
        }
      }



    render(){

        return (this.renderPage())
    }
}

export default Cards

     