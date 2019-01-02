const axios = require("axios");
const { get } = require("./utils");
const championData = require("./championData.json").data;
const championSkills = require("./championSkills.json");
const { API_KEY, header, URL_HEAD } = require("../configs/config");
const axiosOpt = {
  method: "GET",
  params: { api_key: API_KEY },
  header
};
const api = {
  getChampionSkillsByName(name) {
    return Promise.resolve(championSkills.find(champ => get(champ, name)));
  },
  getChampionByName(name) {
    return Promise.resolve(get(championData, name));
  },
  getSummonerMatchInfoByMatchId(id) {
    const END_POINT = `match/v4/matches/${id}`;
    return request(axiosOpt, URL_HEAD + END_POINT);
  },
  getSummonerMatchListsByAccountId(id) {
    const END_POINT = `match/v4/matchlists/by-account/${id}`;
    return request(axiosOpt, URL_HEAD + END_POINT);
  },
  getSummonerInfoByName(name) {
    const END_POINT = `summoner/v4/summoners/by-name/${name}`;
    return request(axiosOpt, URL_HEAD + END_POINT);
  },
  getSummonerMasteryById(id) {
    const END_POINT = `champion-mastery/v4/champion-masteries/by-summoner/${id}`;
    return request(axiosOpt, URL_HEAD + END_POINT);
  },
  getSummonerLeagueBySummonerId(id) {
    const END_POINT = `league/v4/positions/by-summoner/${id}`;
    return request(axiosOpt, URL_HEAD + END_POINT);
  }
};

function request(axiosOpt, url) {
  return axios({
    ...axiosOpt,
    url
  })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err.response.data;
    });
}

module.exports = api;
