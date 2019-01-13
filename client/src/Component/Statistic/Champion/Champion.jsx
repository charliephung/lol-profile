import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  height: 60px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  margin: 10px 10px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  margin: 10px 0px;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

function Champion(props) {
  const { champion, plays, results } = props.champion;
  const win = results.filter(r => r === true).length;
  const loss = results.length - win;
  const winRatio = ((win / results.length) * 100).toFixed(2);

  return (
    <Wrapper>
      <Img
        src={`http://ddragon.leagueoflegends.com/cdn/8.24.1/img/champion/${
          champion.id
        }.png`}
        alt={champion.id}
      />
      <div>
        <p>
          <strong>{winRatio} %</strong>
        </p>
        <p>{`${win} W / ${loss} L`}</p>
      </div>
    </Wrapper>
  );
}

export default Champion;
