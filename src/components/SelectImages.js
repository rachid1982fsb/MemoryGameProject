import React from 'react';
import Image from './Image'
import UploadImages from './UploadImages'


const URL=`http://127.0.0.1:3000/images`

class SelectImages extends React.Component{

    state=({
        selectedImages: [],
        displayedImages: this.props.gameImages
    })

    handleSelect=(id)=>{
        this.setState({
            selectedImages: [...this.state.selectedImages, this.props.gameImages[id]]
        });
    }

    mapImages=()=>{
       return  this.state.displayedImages.map((image, index) => <Image image={image} key={index} id={index} onHandleSelect={this.handleSelect}/> )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onHandleSubmitSelectedImages(this.state.selectedImages)
        if(this.props.currentUser){
            this.state.selectedImages.map(imageUrl => this.fetchImage(imageUrl, "Selected"))
        }
    }

    handleUpload=(url)=>{
        this.fetchImage(url, "Uploaded")
        this.setState({
            displayedImages: [url, ...this.props.gameImages]
        })
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
            user_id: this.props.currentUser.id
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
            <>
            <h2 className="ui block header"> <a href="/" >Home </a> | {this.props.currentUser ? <><a href="/" >LogOut </a> | <a  onClick={()=>this.props.onHandleClick("userProfile")} > Profile </a> </>: <> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </>}</h2>
            <form onSubmit={(e)=> this.handleSubmit(e)}>
                <div className="App-header"> 
                    {this.props.currentUser ? <UploadImages onHandleUpload={this.handleUpload}/> : <h3><a href="/" >Login</a> to Upload your own Images</h3>}
                    <input type="submit" />
                </div>
                
                {this.mapImages()}
                <button className="ui button" onClick={() => this.props.onHandleBackClick()}>Change Game Level</button>
            </form>
            </>
        )
    }
}

export default SelectImages