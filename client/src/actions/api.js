import axios from "axios";

const API_URL = "http://localhost:5000";

export const getMatchesList = enId => {
  return axios
    .get(`${API_URL}/match-lists/${enId}`)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err.response.data;
    });
};
export const getSummonerByName = name => {
  return axios
    .get(`${API_URL}/name/${name}`)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export const getMatchInfo = matchId => {
  return axios
    .get(`${API_URL}/match-info/${matchId}`)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export const getSummonerInfoById = id => {
  return axios
    .get(`${API_URL}/league/${id}`)
    .then(data => {
      return data.data;
    })
    .catch(err => {
      return err.response.data;
    });
};
