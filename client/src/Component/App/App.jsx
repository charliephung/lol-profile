import React, { Component } from "react";
import Navbar from "Navbar/Navbar";
import Header from "Header/Header";
import Profile from "Profile/Profile";
import Overview from "Overview/Overview";
import styled from "styled-components";
import { GlobalStyle } from "./App.styles";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

// https://cdn.communitydragon.org/latest/champion/236/splash-art
class App extends Component {
  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <Navbar />
        <Container>
          <Header />
          <Flex>
            <Profile />
            <Overview />
          </Flex>
        </Container>
      </div>
    );
  }
}

export default App;
