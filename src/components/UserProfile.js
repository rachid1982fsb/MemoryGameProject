import React from 'react';
import { tsPropertySignature } from '@babel/types';



const UserProfile=(props)=>{


    const test=(image)=>{

        console.log(props.currentUser)
        return(
                <div className="ui checkbox">
                <input type="checkbox"/>
                <label>select</label>
                <img src={image.url} alt="" style={{width:"150px", height:"150px" , borderRadius: 20, padding: 5}} /> 
                </div>
        )
    }

    const mapUserImages=()=>{
        console.log(props.currentUser)
        return props.currentUser.images.map((image) => test(image))
    }

    return(
        <>
            <h2 class="ui block header">
              <a href="/" >Home </a> | {props.currentUser ? <a href="/" >LogOut </a> : <a> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </a>}
            </h2>
            <div className="ui cards">
                {/* <div className="card">
                <div className="content">
                    <div className="header">Game Level: {}</div>
                    <div className="description">
                    Score: {}
                    </div>
                </div>
                </div> */}
                <div>{props.currentUser.id ? mapUserImages() : <h2>LogIn OR SignUp</h2> }</div>

            
             </div>
             </>)

}

export default UserProfile