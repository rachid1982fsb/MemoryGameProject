import React from 'react';
import Image from './Image'


class SelectImages extends React.Component{

    state=({
        selectedImages: []
    })

    handleSelect=(id)=>{
        this.setState({
            selectedImages: [...this.state.selectedImages, this.props.gameImages[id]]
        })
    }

    mapImages=()=>{
       return  this.props.gameImages.map((image, index) => <Image image={image} key={index} id={index} onHandleSelect={this.handleSelect}/> )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onHandleSubmitSelectedImages(this.state.selectedImages)
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