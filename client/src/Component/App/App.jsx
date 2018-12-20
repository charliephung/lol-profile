import React, { Component } from "react";
import Navbar from "Component/Navbar/Navbar";
import Header from "Component/Header/Header";
import Profile from "Component/Profile/Profile";
import Overview from "Component/Overview/Overview";
import MatchesListContainer from "Component/MatchesList/MatchesListContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { getMatchesList } from "actions";
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
  componentDidMount() {
    this.props.getMatchesList(
      "AL5QShkjgo7Za7A3WyTBLTvknQLUuPT6vd5ViYehdG1O_bI"
    );
  }
  render() {
    const { matchesList } = this.props;

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
          <div>
            <MatchesListContainer matchesList={matchesList} />
          </div>
        </Container>
      </div>
    );
  }
}

const mapState = state => ({
  matchesList: state.matchesList
});
const mapDispatch = {
  getMatchesList
};

const EnhancedApp = compose(
  connect(
    mapState,
    mapDispatch
  )
);

export default EnhancedApp(App);
