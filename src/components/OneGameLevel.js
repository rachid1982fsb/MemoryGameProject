import React from 'react';
import SelectImages from './SelectImages'

const flatirLogo= "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s300/flatironschool.png"    

const OneGameLevel = (props)=>{
    const {name, pairs}= props.level

    return(
            <div class="card">
                <div class="blurring dimmable image">
                    <img src={flatirLogo} alt=""/>
                </div>
                <div class="content">
                    <a class="header">{name}</a>
                </div>
                <div class="extra content">
                    <button class="ui button" onClick={() => props.onHandelLevelClick(pairs)}>Play</button>
                    <button class="ui button" onClick={() => props.onHandelImagesClick()}>Select images</button>
                </div>
            </div>
    )

}

export default OneGameLevel