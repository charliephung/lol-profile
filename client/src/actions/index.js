import types from "constant";

export const actSetSummonerInfo = summonerInfo => dispatch => {
  dispatch({
    type: types.SET_SUMMONER_INFO,
    summonerInfo
  });
};

export const actSetRankInfo = rankInfo => dispatch => {
  dispatch({
    type: types.SET_RANK_INFO,
    rankInfo
  });
};

export const actSetMatchesList = matchesList => dispatch => {
  dispatch({
    type: types.SET_MATCHES_LIST,
    matchesList
  });
};

export const actSetSummonerMastery = (summonerMastery) => dispatch => {
  dispatch({
    type: types.SET_SUMMONER_MASTER,
    summonerMastery
  });
}

// export const getChampionData
