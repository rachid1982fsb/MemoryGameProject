import React from 'react';


export default class Login extends React.Component{

    state=({
        page: "login",
        username: "",
        password: "",
        currentUser: {}

    })

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
          <div>
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
                            <div className="ui blue submit button" onClick={() => this.props.onHandleLoginClick(this.state.username)}>Login</div>
                        </div>
                    </div>
                    <div className="middle aligned column">
                    <div className="ui big button" onClick={() => this.props.onHandleClick("signup")}>
                        <i className="signup icon"></i>
                        Sign Up
                    </div><br/>
                    <div className="ui big button" onClick={() => this.props.onHandleClick("playAsGuest")}>
                        Play As Guest
                    </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                        Or
                </div>
            </div>
          </div>
        )
    }

}