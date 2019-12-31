import React from 'react';

const url = "http://127.0.0.1:3000/users"

class Login extends React.Component{

    state=({
        page: "login",
        username: "",
        password: "",
        currentUser: {}

    })

    handleLoginClick=()=>{
        
        let user 
        fetch(url).then(resp => resp.json()).then(json => {
            user = json.find(user => user.username === this.state.username )
            if(user){
                this.props.onHandleLogin(user)
            }else{
                console.log("username not found!!!")
                 alert("username not found!!!")
            }
        } )
        // this.props.onHandleLogin(this.state.username, this.state.password)
    }


    handelUsernameChange=(e)=>{
        this.setState({
            username: e.target.value
        })
    }

    handelPasswordChange=(e)=>{
        this.setState({
            password: e.target.value
        })

    }


    render(){
        return(
          <>
            <div className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <label>Username</label>
                                    <div className="ui left icon input">
                                        <input type="text" placeholder="Username" onChange={this.handelUsernameChange}/>
                                            <i className="user icon"></i>
                                    </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input type="password" onChange={this.handelPasswordChange}/>
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            <div className="ui blue submit button" onClick={() => this.handleLoginClick()}>Login</div>
                        </div>
                    </div>
                    <div className="middle aligned column">
                    <div className="ui big button" onClick={() => this.props.onHandleSingUpClick()}>
                        <i className="signup icon"></i>
                        Sign Up
                    </div><br/>
                    <div className="ui big button" onClick={() => this.props.onHandlePlayAsGuestClick()}>
                        Play As Guest
                    </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                        Or
                </div>
            </div>
          </>
        )
    }

}

export default Login