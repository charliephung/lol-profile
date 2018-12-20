import types from "constant";
import axios from "axios";

const API_URL = "http://localhost:5000";

export const getMatchesList = enId => dispatch => {
  return axios
    .get(`${API_URL}/match-lists/${enId}`)
    .then(data => {
      dispatch({
        type: types.GET_MATCHES_LIST,
        matchesList: data.data
      });
      return data.data;
    })
    .catch(err => {
      dispatch({
        type: types.GET_MATCHES_LIST_ERROR
      });
    });
};

// export const getChampionData
