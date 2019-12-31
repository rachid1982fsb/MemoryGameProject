import React from 'react';
import './App.css';
import Cards from './containers/Cards'
import Login from './components/Login'
import SignUp from './components/SignUp'

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
    // this.props.onHandleLogin(this.state.username, this.state.password)
}


  renderPage=()=>{
    switch(this.state.page) {
      case 'login':
        return <Login onHandleSingUpClick={this.handleSingUpClick} onHandlePlayAsGuestClick={this.handlePlayAsGuestClick} onHandleLoginClick={this.handleLoginClick}/>;
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
    return (<div>
            {this.renderPage()}
           </div>
     ) }
}

export default App;
