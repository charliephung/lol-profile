import React, { Fragment } from "react";
import { Wrapper, Card, BorderRight } from "./Statistic.styles";
import Graph from "./Graph/Graph";
import ChampionContainer from "./Champion/ChampionContainer";
import getChampionById from "utils/getChampionById";

function getChampionPlayedStats(playerMatchInfo) {
  const stats = {};
  playerMatchInfo.forEach(play => {
    if (stats[play.championId] === undefined) {
      stats[play.championId] = {
        plays: 1,
        results: [play.stats.win]
      };
    } else {
      stats[play.championId].plays += 1;
      stats[play.championId].results.push(play.stats.win);
    }
  });
  return stats;
}

function StatisticContainer(props) {
  const { summonerInfo, matchesList } = props;
  var winMatches, lostMatches, championsList;
  if (matchesList.length !== 0 && Object.keys(summonerInfo).length !== 0) {
    const playerMatchInfo = getPlayerMatchInfo(matchesList, summonerInfo);
    const championPlayed = getChampionPlayedStats(playerMatchInfo);
    championsList = Object.keys(championPlayed).map(id => ({
      ...championPlayed[id],
      champion: getChampionById(id)
    }));
    winMatches = playerMatchInfo.filter(t => t.stats.win).length;
    lostMatches = playerMatchInfo.length - winMatches;
  }

  return (
    <Wrapper>
      {matchesList.length === 0 ? (
        <Card>
          <BorderRight color={"#eeeeee"}>
            <Graph />
          </BorderRight>
        </Card>
      ) : (
        <Fragment>
          <Card>
            <BorderRight color={"#eeeeee"}>
              <Graph winMatches={winMatches} lostMatches={lostMatches} />
            </BorderRight>
          </Card>
          <div>
            <ChampionContainer championsList={championsList} />
          </div>
        </Fragment>
      )}
    </Wrapper>
  );
}

export default StatisticContainer;

function getPlayerMatchInfo(matchesList, playerInfo) {
  return matchesList.map(match => {
    const playerIdentity = match.participantIdentities.find(
      identity => identity.player.accountId === playerInfo.accountId
    );
    const player = match.participants.find(
      participant => participant.participantId === playerIdentity.participantId
    );
    return player;
  });
}
