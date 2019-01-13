import React, { Fragment } from "react";
import { Card, RankIcon } from "./Rank.styles";

function Rank({
  tier,
  rank,
  leaguePoints,
  wins,
  losses,
  winRatio,
  leagueName,
  color
}) {
  return (
    <Card>
      <Fragment>
        <RankIcon src={`/img/${tier}_Emblem.png`} alt={tier} />
        <div>
          <p style={{ color }}>{`${tier} ${rank}`}</p>
          <p>{`${leaguePoints} LP / ${wins}W ${losses}L`}</p>
          <p>{`Win Ratio ${winRatio}%`}</p>
          <p>{`${leagueName}`}</p>
        </div>
      </Fragment>
    </Card>
  );
}

export default Rank;
