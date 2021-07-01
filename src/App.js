import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Particles from "react-particles-js"
import Header from "./components/Header"
import Home from "./components/Home"
import "./App.css"
export class App extends Component {
  render() {
    return (
      <div>
        {/* <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 30,
              },
              color: {
                value: "#5FCDA4",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.2,
              },
              size: {
                value: 7,
              },
              lineLinked: {
                distance: 0,
                color: "#262C43",
              },
              move: {
                speed: 2,
              },
            },
          }}
        /> */}
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
