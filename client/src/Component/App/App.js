import React, { Component } from "react";
import Navbar from "Navbar/Navbar";
class App extends Component {
  state = { info: {}, mastery: {} };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Info</h1>
        <div>{JSON.stringify(this.state.info)}</div>
        <br />
        <div>{JSON.stringify(this.state.mastery)}</div>
      </div>
    );
  }
}

export default App;
