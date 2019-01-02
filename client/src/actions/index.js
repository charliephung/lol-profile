import types from "constant";

export const actSummonerInfo = summonerInfo => dispatch => {
  dispatch({
    type: types.SET_SUMMONER_INFO,
    summonerInfo
  });
};
export const actMatchesList = matchesList => dispatch => {
  dispatch({
    type: types.SET_MATCHES_LIST,
    matchesList
  });
};

// export const getChampionData
