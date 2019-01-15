import React, { Component } from "react";
import Navbar from "Component/Navbar/Navbar";
import Header from "Component/Header/Header";
import RankContainer from "Component/Rank/RankContainer";
import StatisticContainer from "Component/Statistic/StatisticContainer";
import MatchesListContainer from "Component/MatchesList/MatchesListContainer";
import MasteryContainer from "Component/Mastery/MasteryContainer";
import { Container, Flex, FlexColumn } from "./App.styles";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getMatchesList,
  getSummonerByName,
  getRankInfoById,
  getMatchInfo,
  getSummonerMasteryById
} from "actions/api";
import {
  actSetSummonerInfo,
  actSetMatchesList,
  actSetRankInfo,
  actSetSummonerMastery
} from "actions";
import { GlobalStyle } from "./App.styles";

// https://cdn.communitydragon.org/latest/champion/236/splash-art
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      const {
        matchesList,
        summonerInfo,
        rankInfo,
        summonerMastery
      } = localStorage;
      if (true) {
        this.props.actSetSummonerInfo(JSON.parse(summonerInfo));
        this.props.actSetRankInfo(JSON.parse(rankInfo));
        this.props.actSetMatchesList(JSON.parse(matchesList));
        this.props.actSetSummonerMastery(JSON.parse(summonerMastery));
      } else {
        getSummonerByName("Black Rangerrr")
          .then(info => {
            this.props.actSetSummonerInfo(info);
            getSummonerMasteryById(info.id).then(mastery =>
              this.props.actSetSummonerMastery(mastery)
            );
            getRankInfoById(info.id).then(rankInfo =>
              this.props.actSetRankInfo(rankInfo)
            );
            return info.accountId;
          })
          .then(accountId => getMatchesList(accountId))
          .then(matchesList =>
            matchesList.map(match => getMatchInfo(match.gameId))
          )
          .then(promises => Promise.all(promises))
          .then(match => {
            this.props.actSetMatchesList(match);
          })
          .then(() => {
            const {
              matchesList,
              summonerInfo,
              rankInfo,
              summonerMastery
            } = this.props;
            localStorage.setItem("matchesList", JSON.stringify(matchesList));
            localStorage.setItem("summonerInfo", JSON.stringify(summonerInfo));
            localStorage.setItem("rankInfo", JSON.stringify(rankInfo));
            localStorage.setItem(
              "summonerMastery",
              JSON.stringify(summonerMastery)
            );
          });
      }
    }, 3000);
  }
  render() {
    const { matchesList, summonerInfo, rankInfo, summonerMastery } = this.props;

    return (
      <div className="app">
        <GlobalStyle />
        <Navbar />
        <Container>
          <Header summonerInfo={summonerInfo} />
          <Flex>
            <FlexColumn widthPercent={40}>
              <RankContainer rankInfo={rankInfo} />
              <MasteryContainer summonerMastery={summonerMastery} />
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
  rankInfo: state.rankInfo,
  summonerMastery: state.summonerMastery
});
const mapDispatch = {
  actSetSummonerInfo,
  actSetMatchesList,
  actSetRankInfo,
  actSetSummonerMastery
};

const EnhancedApp = compose(
  connect(
    mapState,
    mapDispatch
  )
);

export default EnhancedApp(App);
