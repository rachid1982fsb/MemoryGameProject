import React from 'react';
import './App.css';
import Cards from './containers/Cards'
import Login from './components/Login'
import SignUp from './components/SignUp'

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

  handleSingUpClick= () =>{
    this.setState({
        page: "signup"
    })
  }

  submitNewUser = (username) =>{
    this.setState({
      page: "loggedIn",
      username: username
  })
  }

  handlePlayAsGuestClick = () =>{
    this.setState({
        page: "playAsGuest"
    })
  }

  renderPage=()=>{
    switch(this.state.page) {
      case 'login':
        return <Login onHandleSingUpClick={this.handleSingUpClick} onHandlePlayAsGuestClick={this.handlePlayAsGuestClick} onHandleLogin={this.handleLogin}/>;
      case 'signup':
        return <SignUp onSubmitNewUser={(username)=>this.submitNewUser(username)}/>;
      case 'playAsGuest':
        return <Cards />
      case 'loggedIn':
        return <Cards currentUser={this.state.currentUser}/>
        default:
        return null;
    }
  }


  render(){
    return (this.renderPage())
  }
}

export default App;

