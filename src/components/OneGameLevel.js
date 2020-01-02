import React from 'react';

const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    

const OneGameLevel = (props)=>{
    const {name, pairs}= props.level

    return(
            <div className="card">
                <div className="blurring dimmable image">
                    <img src={flatirLogo} alt=""/>
                </div>
                <div className="content">
                    <h2 className="header">{name}</h2>
                </div>
                <div className="extra content">
                    <button className="ui button" onClick={() => props.onHandelLevelClick(pairs)}>Play</button>
                    <button className="ui button" onClick={() => props.onHandelSelectImagesClick(pairs)}>Select images</button>
                </div>
            </div>
    )

}

export default OneGameLevel