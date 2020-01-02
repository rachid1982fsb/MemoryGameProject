import React from 'react';

export default class SignUp extends React.Component{

    state=({
        password: "",
        username: ""
    })

    handleSubmit=()=>{
        this.fetchNewUser()
        this.props.onSubmitNewUser(this.state.username)
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

    fetchNewUser=()=>{
        fetch(`http://127.0.0.1:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
          password: this.state.password,
          username: this.state.username
        })
        }).then(function(resp) {
          if (Math.floor(resp.status/200) === 1) {
            console.log("Great ")
          } else {
            console.log("ERROR", resp)
          }
        })
      }

    render(){
        return(
            <>
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
                <div className="field">
                    <label>Confirm Password</label>
                    <div className="ui left icon input">
                        <input type="password"/>
                            <i className="lock icon"></i>
                    </div>
                </div>
                <div className="ui blue submit button" onClick={()=> this.handleSubmit()}>Submit</div>
                <button><a href="/" >Back</a></button>
            </div>
            </>
        )
    }
}