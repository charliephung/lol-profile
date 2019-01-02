import React, { Component } from "react";
import Navbar from "Component/Navbar/Navbar";
import Header from "Component/Header/Header";
import Profile from "Component/Profile/Profile";
import Overview from "Component/Overview/Overview";
import MatchesListContainer from "Component/MatchesList/MatchesListContainer";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getMatchesList,
  getSummonerByName,
  getSummonerInfoById,
  getMatchInfo
} from "actions/api";
import { actSummonerInfo, actMatchesList } from "actions";
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
    getSummonerByName("Black Rangerrr")
      .then(info => {
        getSummonerInfoById(info.id).then(summoner =>
          this.props.actSummonerInfo(summoner)
        );
        return info.accountId;
      })
      .then(accountId => getMatchesList(accountId))
      .then(matchesList => matchesList.map(match => getMatchInfo(match.gameId)))
      .then(promises => Promise.all(promises))
      .then(match => {
        console.log(match);
      });
  }
  render() {
    const { matchesList, summonerInfo } = this.props;
    return (
      <div className="app">
        <GlobalStyle />
        <Navbar />
        <Container>
          <Header />
          <Flex>
            <Profile summonerInfo={summonerInfo} />
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
  matchesList: state.matchesList,
  summonerInfo: state.summonerInfo
});
const mapDispatch = {
  actSummonerInfo,
  actMatchesList
};

const EnhancedApp = compose(
  connect(
    mapState,
    mapDispatch
  )
);

export default EnhancedApp(App);
