import React from "react";
import styled from "styled-components";
import { LINK } from "constant/link";

const Wrapper = styled.div`
  margin-top: 20px;
  box-shadow: 3px 4px 14px rgba(59, 43, 91, 0.4);
  border-radius: 5px;
  padding: 10px;
`;

const Card = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 150px;
  width: 150px;
`;
const Profile = styled.div`
  margin-left: 10px;
`;

function Header(props) {
  const { profileIconId, name, summonerLevel } = props.summonerInfo;
  return (
    <Wrapper>
      <Card>
        <Icon src={`${LINK}/img/profileicon/${profileIconId}.png`} />
        <Profile>
          <h1>{name}</h1>
          <p>summonerLevel: {summonerLevel}</p>
        </Profile>
      </Card>
    </Wrapper>
  );
}

export default Header;
