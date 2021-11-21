// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> compoent  render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

import React from "react"
import reactDOM from "react-dom"
import App from "./App"


class App1 extends React.Component {
  render() {
    return (
      <div>
        <Header username={"Kent Emershon"}/>
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay = "night"
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    }

    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}

reactDOM.render(
  <App />,
  document.getElementById("root")
)