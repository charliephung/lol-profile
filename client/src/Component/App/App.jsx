import React, { Component } from "react";
import Navbar from "Component/Navbar/Navbar";
import Header from "Component/Header/Header";
import RankContainer from "Component/Rank/RankContainer";
import StatisticContainer from "Component/Statistic/StatisticContainer";
import MatchesListContainer from "Component/MatchesList/MatchesListContainer";
import { Container, Flex, FlexColumn } from "./App.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getMatchesList,
  getSummonerByName,
  getRankInfoById,
  getMatchInfo
} from "actions/api";
import { actSummonerInfo, actMatchesList, actRankInfo } from "actions";
import { GlobalStyle } from "./App.styles";

// https://cdn.communitydragon.org/latest/champion/236/splash-art
class App extends Component {
  componentDidMount() {
    const { matchesList, summonerInfo, rankInfo } = localStorage;
    if (matchesList && summonerInfo && rankInfo) {
      this.props.actSummonerInfo(JSON.parse(summonerInfo));
      this.props.actRankInfo(JSON.parse(rankInfo));
      this.props.actMatchesList(JSON.parse(matchesList));
    } else {
      getSummonerByName("Black Rangerrr")
        .then(info => {
          this.props.actSummonerInfo(info);
          getRankInfoById(info.id).then(rankInfo =>
            this.props.actRankInfo(rankInfo)
          );
          return info.accountId;
        })
        .then(accountId => getMatchesList(accountId))
        .then(matchesList =>
          matchesList.map(match => getMatchInfo(match.gameId))
        )
        .then(promises => Promise.all(promises))
        .then(match => {
          this.props.actMatchesList(match);
        });
    }
  }
  render() {
    const { matchesList, summonerInfo, rankInfo } = this.props;

    return (
      <div className="app">
        <GlobalStyle />
        <Navbar />
        <Container>
          <Header />
          <Flex>
            <FlexColumn widthPercent={40}>
              <RankContainer rankInfo={rankInfo} />
            </FlexColumn>
            <FlexColumn widthPercent={60}>
              <StatisticContainer
                summonerInfo={summonerInfo}
                matchesList={matchesList}
              />
            </FlexColumn>
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
  summonerInfo: state.summonerInfo,
  rankInfo: state.rankInfo
});
const mapDispatch = {
  actSummonerInfo,
  actMatchesList,
  actRankInfo
};

const EnhancedApp = compose(
  connect(
    mapState,
    mapDispatch
  )
);

export default EnhancedApp(App);
