import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 350px;
  box-shadow: 3px 4px 14px rgba(59, 43, 91, 0.4);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  display: flex;
`;

const Card = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;
const RankIcon = styled.img`
  width: 150px;
  height: 100%;
  padding-right: 20px;
`;
const Heading = styled.h1``;
const color = {
  Bronze: "#683d27",
  Challenger: "#1574f6",
  Diamond: "#506b9c",
  Gold: "#ecc57d",
  Grandmaster: "#fe585a",
  Iron: "#595050",
  Master: "#a13f8b",
  Platinum: "#77dcd6",
  Silver: "#829ba3"
};

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
