import React from 'react'

// const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    


const Image= (props)=>{
    const {image, id} = props

    return (   
        <div className="ui checkbox" onChange={() => props.onHandleSelect(id)}>
            <input type="checkbox"/>
            <label>select</label>
            <img style={{backgroundImage: `url(${image})`}} height="150px" width="150px" alt=""/>
        </div>
    )
}
export default Image