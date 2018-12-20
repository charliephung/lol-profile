import React from "react";
import { Wrapper, Card, RankIcon } from "./Profile.styles";

function Profile() {
  return (
    <Wrapper>
      <Card>
        <RankIcon src="/img/Silver_Emblem.png" alt="" />
        <div>
          <p color="#683d27">Bronze 3</p>
          <p>0 LP / 53W 38L </p>
          <p>Win Ratio 58%</p>
          <p>Urgot's Masterminds</p>
        </div>
      </Card>
    </Wrapper>
  );
}

export default Profile;
