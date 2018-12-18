const axios = require("axios");

const API_KEY = "RGAPI-9a6eebdd-1ab8-4287-a269-ea87ce561570";
const header = {
  Origin: "https://developer.riotgames.com",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  "X-Riot-Token": API_KEY,
  "Accept-Language": "en-US,en;q=0.9",
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
};
const URL_HEAD = `https://euw1.api.riotgames.com/lol/`;
const axiosOpt = {
  method: "GET",
  params: { api_key: API_KEY },
  header
};
const api = {
  getSummonerMatchInfoByMatchId(id) {
    const END_POINT = `match/v3/matches/${id}`;
    return axios({
      ...axiosOpt,
      url: URL_HEAD + END_POINT
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        return err.response.data;
      });
  },
  getSummonerMatchListsByAccountId(id) {
    const END_POINT = `match/v3/matchlists/by-account/${id}`;
    return axios({
      ...axiosOpt,
      url: URL_HEAD + END_POINT
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        return err.response.data;
      });
  },
  getSummonerInfoByName(name) {
    const END_POINT = `summoner/v3/summoners/by-name/${name}`;
    return axios({
      ...axiosOpt,
      url: URL_HEAD + END_POINT
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        return err.response.data;
      });
  },
  getSummonerMasteryById(id) {
    const END_POINT = `champion-mastery/v3/champion-masteries/by-summoner/${id}`;
    return axios({
      ...axiosOpt,
      url: URL_HEAD + END_POINT
    })
      .then(result => {
        return result.data;
      })
      .catch(err => {
        return err.response.data;
      });
  }
};

module.exports = api;
