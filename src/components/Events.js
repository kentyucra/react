import React from "react"

// Search for Supported events in react

class Events extends React.Component {
    handleClick() {
        console.log("I was clicked")
    }

    overImg() {
        console.log("over img")
    }

    render() {
        return (
            <div>
                <img onMouseOver={this.overImg} src="https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"/>
                <br />
                <br />
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default Events