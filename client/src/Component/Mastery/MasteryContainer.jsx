import React from "react";
import { LINK } from "constant/link";
import { Wrapper } from "./Mastery.styles";

function Mastery(props) {
  return (
    <div>
      <img src={`${LINK}/img/${props.championId}`} alt="" />
      <p>{props.championLevel}</p>
    </div>
  );
}

export default function MasteryContainer(props) {
  const { summonerMastery } = props;

  return (
    <Wrapper>
      {summonerMastery.map(s => (
        <Mastery {...s} />
      ))}
    </Wrapper>
  );
}
