import React from 'react';
import Displaycards from '../components/DisplayCards';
import Images from '../data.js'
import BackImage from '../dataBackImage.js'

// import { url } from 'inspector';

// const URL=`https://api.unsplash.com/photos/random/?client_id=f85ffb0a72b747b19739700d969b59c020dfdc3b7d2e854a3e6c1c852f96c5e2`

class Cards extends React.Component{

    constructor(){
        super()
        this.state=({
            numberOfCards: 8,
            imagesUrl: Images,
            backImage: [...BackImage],
        })
    
    }

    // componentDidMount(){
    //     this.fetchImages()
    //      for (let i=0; i < this.state.numberOfCards ; i++) {
    //         this.fetchImages()
    //     }
    //     console.log(this.state.imagesUrl)
    // }

    // fetchImages=()=>{
    //     // let imageUrl=""
    //     fetch(URL)
    //     .then(resp => resp.json())
    //     .then(json =>  this.setState( preState => ({
    //         imagesUrl: [...preState.imagesUrl, json.urls.regular ]
    //     })))
    // }

    render(){

        return <Displaycards  numberOfCards={this.state.numberOfCards} imagesUrl={this.state.imagesUrl} backImage={this.state.backImage}/>
    }
}

export default Cards

     