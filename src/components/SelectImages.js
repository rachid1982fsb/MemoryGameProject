import React from 'react';
import Image from './Image'


const URL=`http://127.0.0.1:3000/images`

class SelectImages extends React.Component{

    state=({
        selectedImages: []
    })

    handleSelect=(id)=>{
        this.setState({
            selectedImages: [...this.state.selectedImages, this.props.gameImages[id]]
        });
    }

    mapImages=()=>{
       return  this.props.gameImages.map((image, index) => <Image image={image} key={index} id={index} onHandleSelect={this.handleSelect}/> )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onHandleSubmitSelectedImages(this.state.selectedImages)
        if(this.props.currentUserId){
            this.state.selectedImages.map(imageUrl => this.fetchImage(imageUrl))
        }

    }


    fetchImage =(imageUrl)=>{
        fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify({
            url: imageUrl,
            user_id: this.props.currentUserId
          })
          }).then(function(resp) {
            if (Math.floor(resp.status/200) === 1) {
                console.log("Great ")
            } else {
              console.log("ERROR", resp)
            }
          })
    }

    render(){
        return (
            <form onSubmit={(e)=> this.handleSubmit(e)}>
            {this.mapImages()}
            <input type="submit"/>
            </form>
        )
    }
}

export default SelectImages