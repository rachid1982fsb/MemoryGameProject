import React from 'react';
import SelectImages from './SelectImages'

const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    

const OneGameLevel = (props)=>{
    const {name, pairs}= props.level

    return(
            <div className="card">
                <div className="blurring dimmable image">
                    <img src={flatirLogo} alt=""/>
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                </div>
                <div className="extra content">
                    <button class="ui button" onClick={() => props.onHandelLevelClick(pairs)}>Play</button>
                    <button class="ui button" onClick={() => props.onHandelSelectImagesClick(pairs)}>Select images</button>
                </div>
            </div>
    )

}

export default OneGameLevel