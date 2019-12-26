import React from 'react';
import Displaycards from '../components/DisplayCards';
import Images from '../data.js'
import ExtraImages from '../dataExtraImages.js'
import GameLevels from '../components/GameLevels';
import SelectImages from '../components/SelectImages'

// import { url } from 'inspector';
const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    

// const URL=`https://api.unsplash.com/photos/random/?client_id=f85ffb0a72b747b19739700d969b59c020dfdc3b7d2e854a3e6c1c852f96c5e2`

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

    // componentDidMount(){
    //     this.fetchImages()
    //      for (let i=0; i < this.state.numberOfPairs ; i++) {
    //         this.fetchImages()
    //     }
    //     console.log(this.state.imagesUrl)
    // }

    // fetchImages=()=>{
    //     // let imageUrl=""
    //     fetch(URL)
    //     .then(resp => resp.json())
    //     .then(json =>  this.setState( preState => ({
    //         gameImages: [...preState.imagesUrl, json.urls.regular ]
    //     })))
    // }

    handelLevelClick=(numberPairs)=>{
        console.log(this.state.numberOfPairs)
        this.setState({
            numberOfPairs: numberPairs,
            page: "play"
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
            return <Displaycards  numberOfPairs={this.state.numberOfPairs} gameImages={this.state.gameImages} backImage={this.state.backImage} defaultCardImage={this.state.defaultCardImage}/>;
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

     