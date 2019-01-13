import React from "react";
import { Wrapper, textColor } from "./Rank.styles";
import Rank from "./Rank";

function RankContainer(props = []) {
  const { rankInfo } = props;
  const ranks = rankInfo.map(info => {
    var { tier, leaguePoints, losses, leagueName, rank, wins, leagueId } = info;
    var winRatio = ((wins * 100) / (wins + losses)).toFixed(2);
    var color = textColor[tier];
    return {
      tier,
      leaguePoints,
      losses,
      leagueName,
      rank,
      wins,
      leagueId,
      winRatio,
      color
    };
  });
  return (
    <Wrapper>
      {ranks.length === 0 ? (
        <Rank
          alt={"Unranked"}
          rank={""}
          tier={"UNRANKED"}
          wins={0}
          losses={0}
          winRatio={0}
          leagueName={""}
        />
      ) : (
        ranks.map(rank => (
          <Rank
            key={rank.leagueId}
            alt={rank.tier}
            rank={rank.rank}
            tier={rank.tier}
            wins={rank.wins}
            losses={rank.losses}
            winRatio={rank.winRatio}
            leaguePoints={rank.leaguePoints}
            leagueName={rank.leagueName}
            color={textColor[rank.tier]}
          />
        ))
      )}
    </Wrapper>
  );
}

export default RankContainer;
