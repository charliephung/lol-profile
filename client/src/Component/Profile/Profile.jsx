import React, { Fragment } from "react";
import { Wrapper, Card, RankIcon } from "./Profile.styles";

function Profile(props = []) {
  const { summonerInfo } = props;
  const info = summonerInfo.find(info => info.queueType === "RANKED_SOLO_5x5");
  if (info) {
    var { tier, leaguePoints, losses, leagueName, rank, wins } = info;
    var winRatio = ((wins * 100) / (wins + losses)).toFixed(2);
  }

  return (
    <Wrapper>
      <Card>
        {info == undefined ? (
          <Fragment>
            <RankIcon src="/img/UNRANKED_Emblem.png" alt="" />
            <div>
              <p color="#683d27">Unranked</p>
              <p>0 LP / 0W 0L </p>
              <p>Win Ratio 0%</p>
              <p />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <RankIcon src={`/img/${tier}_Emblem.png`} alt={tier} />
            <div>
              <p color="#683d27">{`${tier} ${rank}`}</p>
              <p>{`${leaguePoints} LP / ${wins}W ${losses}L`}</p>
              <p>{`Win Ratio ${winRatio}%`}</p>
              <p>{`${leagueName}`}</p>
            </div>
          </Fragment>
        )}
      </Card>
    </Wrapper>
  );
}

export default Profile;
