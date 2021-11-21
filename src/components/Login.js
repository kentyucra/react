import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called 'isLoggedIn' which is a boolean
// (true if logged in, false otherwise)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        return (<div>
            <h1>Your are currently {this.state.isLoggedIn ? "IN" : "OUT"}.</h1>
        </div>)
    }
}

export default Login