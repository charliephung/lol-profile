import React from "react";
import Match from "./Match";

function MatchesListContainer(props) {
  console.log(props);

  return props.matchesList.map(matchInfo => (
    <Match key={matchInfo.gameId} {...matchInfo} />
  ));
}

export default MatchesListContainer;
