import React from "react";
import styled from "styled-components";
import Champion from "./Champion";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ChampionContainer(props) {
  console.log(props);
  return (
    <Flex>
      {props.championsList.map(champ => (
        <Champion key={champ.champion.key} champion={champ} />
      ))}
    </Flex>
  );
}

export default ChampionContainer;
