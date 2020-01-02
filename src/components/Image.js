import React from 'react'


const Image= (props)=>{
    const {image, id} = props

    return (   
        <div className="ui checkbox" onChange={() => props.onHandleSelect(id)}>
            <input type="checkbox"/>
            <label>select</label>
            <img src={image} alt="" style={{width:"150px", height:"150px" , borderRadius: 20, padding: 5}} /> 
        </div>
    )
}
export default Image