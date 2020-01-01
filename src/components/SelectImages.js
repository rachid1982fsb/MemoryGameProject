import React from 'react';
import Image from './Image'
import UploadImages from './UploadImages'


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
            this.state.selectedImages.map(imageUrl => this.fetchImage(imageUrl, "Selected"))
        }
    }

    handleUpload=(url)=>{
        this.fetchImage(url, "Uploaded")
    }


    fetchImage =(imageUrl, type)=>{
        fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify({
            name: type,
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
                <div className="App-header"> 
                    {this.props.currentUserId ? <UploadImages onHandleUpload={this.handleUpload}/> : <h3><a href="/" >Login</a> to Upload your own Images</h3>}
                    <input type="submit" />
                </div>
                
                {this.mapImages()}
                <button type="submit"><a href="/" >Back</a></button>
            </form>
        )
    }
}

export default SelectImages