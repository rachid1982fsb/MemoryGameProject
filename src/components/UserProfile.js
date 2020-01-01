import React from 'react';
import { tsPropertySignature } from '@babel/types';


const URL=`http://127.0.0.1:3000/images`

const UserProfile=(props)=>{


    const handleDeleteClick=(id)=>{
        fetchDelete(id)
        props.onHandleDeleteImage(props.currentUser.username)
    }

    const  fetchDelete=(id) =>{
        return fetch(URL + '/' + id, {
          method: 'delete'
        })
        .then(response => response.json())
        .then(json => console.log(json.message) )
        .catch(err => {
            console.error(err)
          });
      }

    const displayImage=(image)=>{
        return(
                <div className="card">
                    {/* <input type="checkbox"/> */}
                    <div class="ui bottom attached button" onClick={()=> handleDeleteClick(image.id)}>
                        Delete
                    </div>
                    <img src={image.url} alt="" style={{width:"300px", height:"300px" , borderRadius: 20, padding: 5}} /> 
                </div>
        )
    }

    const mapUserImages=()=>{
        console.log(props.currentUser.images)
        return props.currentUser.images.map((image) => displayImage(image))
    }

    return(
        <>
            <h2 class="ui block header">
              <a href="/" >Home </a> | {props.currentUser ? <a><a href="/" >LogOut </a> | <a  onClick={()=>props.onHandlePlayClick("loggedIn")} >Play </a></a> : <a> <a href="/" >LogIn </a>  | <a href="/signup" >SignUp </a> </a>}
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
                <div class="ui cards">{props.currentUser.id ? mapUserImages() : <h2>LogIn OR SignUp</h2> }</div>

            
             </div>
             </>)

}

export default UserProfile