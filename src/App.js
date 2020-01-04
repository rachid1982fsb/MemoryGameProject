import React from 'react';
import './App.css';
import Cards from './containers/Cards'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'

const url = "http://memorycardgamebackend.herokuapp.com/users"

export default class App extends React.Component {

  state=({
    username: "",
    page: "login",
    currentUser: {}
  })   

  handlePageClick=(selcetedPage)=>{
      this.setState({
        page: selcetedPage
    })
  }

 

  submitNewUser = (userName) =>{
      this.setState({
        page: "loggedIn",
        username: userName
    })
    this.handleLoginClick(userName)
  }

  handleDeleteImage=(username)=>{
    let user 
    fetch(url).then(resp => resp.json()).then(json => {
        user = json.find(user => user.username === username )
        if(user){
            this.setState({
              page: "userProfile",
              currentUser: user
            })
        }
    } )
  }

  
  fetchUsername=(username)=>{
    let user
    fetch(url).then(resp => resp.json()).then(json => {
      user = json.find(user => user.username === username )
      if(user){
        this.setState({
          currentUser: user
        })    
      }else{
        console.log("username not found!!!")   
        }        
      })
  }

  handleLoginClick=(username)=>{
    let user
    fetch(url).then(resp => resp.json()).then(json => {
      user = json.find(user => user.username === username )
      if(user){
        this.setState({
          currentUser: user,
          page: "loggedIn"
        })    
      }else{
        alert("Username not found!!!") 
        console.log("username not found!!!")   
        }        
      })
  }

  renderPage=()=>{
    switch(this.state.page) {
      case 'login':
        return <Login onHandleClick={this.handlePageClick} onHandleLoginClick={this.handleLoginClick}/>;
      case 'signup':
        return <SignUp onSubmitNewUser={this.submitNewUser}/>;
      case 'playAsGuest':
        return <Cards onHandleUserClick={this.handlePageClick}/>
      case 'loggedIn':
        return <Cards currentUser={this.state.currentUser} onHandleUserClick={this.handlePageClick} onFetchUsername={this.fetchUsername}/>
      case 'userProfile':
        return <UserProfile currentUser={this.state.currentUser} onHandlePlayClick={this.handlePageClick} onHandleDeleteImage={this.handleDeleteImage}/>
        default:
        return null;
    }
  }


  render(){
    return (<div>
      <div><h1>Memory Card Game</h1></div>
      {this.renderPage()}
     </div>
    )
   }
}
