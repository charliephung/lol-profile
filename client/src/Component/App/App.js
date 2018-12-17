import React, { Component } from "react";
import Navbar from "Navbar/Navbar";
import { GlobalStyle } from "./App.styles";
class App extends Component {
  state = { info: {}, mastery: {} };

  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <Navbar />
      </div>
    );
  }
}

export default App;
