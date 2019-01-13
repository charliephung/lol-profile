import type from "constant";

const initData = [];

const reducer = (state = initData, actions) => {
  switch (actions.type) {
    case type.SET_SUMMONER_MASTER:
      return actions.summonerMastery;
    default:
      return state;
  }
};

export default reducer;
