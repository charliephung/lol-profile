import React from "react";
import styled from "styled-components";

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

function Header() {
  return (
    <Wrapper>
      <Card>
        <Icon src="http://ddragon.leagueoflegends.com/cdn/8.24.1/img/profileicon/3860.png" />
        <Profile>
          <h1>Black Rangerrr</h1>
          <p>summonerLevel: 56</p>
        </Profile>
      </Card>
    </Wrapper>
  );
}

export default Header;
