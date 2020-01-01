import React from 'react';
import './App.css';
import Cards from './containers/Cards'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const url = "http://127.0.0.1:3000/users"

class App extends React.Component {

  state=({
    username: "",
    page: "login",
    currentUser: {}
  })

  handleLogin=(user)=>{
      this.setState({
        page: "loggedIn",
        currentUser: user
    })
    
  }
  handleUserClick=()=>{
    this.setState({
      page: "userProfile"
  })
  }

  handleSingUpClick= () =>{
    this.setState({
        page: "signup"
    })
  }

  submitNewUser = (userName) =>{
      this.setState({
        page: "loggedIn",
        username: userName
    })
    this.handleLoginClick(userName)
  }

  handlePlayAsGuestClick = () =>{
    this.setState({
        page: "playAsGuest"
    })
  }

  handleLoginClick=(username)=>{
    let user 
    fetch(url).then(resp => resp.json()).then(json => {
        user = json.find(user => user.username === username )
        if(user){
            this.handleLogin(user)
        }else{
            console.log("username not found!!!")
             alert("username not found!!!")
        }
    } )
}


  renderPage=()=>{
    switch(this.state.page) {
      case 'login':
        return <Login onHandleSingUpClick={this.handleSingUpClick} onHandlePlayAsGuestClick={this.handlePlayAsGuestClick} onHandleLoginClick={this.handleLoginClick}/>;
      case 'signup':
        return <SignUp onSubmitNewUser={this.submitNewUser}/>;
      case 'playAsGuest':
        return <Cards onHandleUserClick={this.handleUserClick}/>
      case 'loggedIn':
        return <Cards currentUser={this.state.currentUser} onHandleUserClick={this.handleUserClick}/>
      case 'userProfile':
        return <UserProfile currentUser={this.state.currentUser}/>
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

export default App;



// (<Router>
// <Route exact path="/" render={()=>  this.renderPage()} />
// {/* <Route exact path="/" component={App} /> */}
// {/* <Route exact path="/signup" component={SignUp} /> */}
// {/* <Route exact path="/login" component={App} /> */}
// {/* <Route exact path="/user" render={() => <UserProfile page={this.state.page}/>} /> */}
// </Router>) 