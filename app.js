const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const api = require("./Utils/api");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/name/:summoner_name", (req, res) => {
  const { summoner_name } = req.params;
  api
    .getSummonerInfoByName(summoner_name)
    .then(r => {
      res.status(200).json(r);
    })
    .catch(e => {
      res.status(400).json(e);
    });
});

app.get("/mastery/:summoner_id", (req, res) => {
  const { summoner_id } = req.params;
  api
    .getSummonerMasteryById(summoner_id)
    .then(championData => championData.slice(0, 10))
    .then(championData => {
      return res.status(200).json(championData);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});

app.get("/league/:summoner_id", (req, res) => {
  const { summoner_id } = req.params;
  api
    .getSummonerLeagueBySummonerId(summoner_id)
    .then(info => {
      return res.status(200).json(info);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});

app.get("/match-lists/:account_id", (req, res) => {
  const { account_id } = req.params;
  api
    .getSummonerMatchListsByAccountId(account_id)
    .then(matches => matches.matches)
    .then(addedChampionMatchLists => addedChampionMatchLists.slice(0, 20))
    .then(matchLists => {
      return res.status(200).json(matchLists.slice(0, 20));
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});

app.get("/match-info/:match_id", (req, res) => {
  const { match_id } = req.params;
  api
    .getSummonerMatchInfoByMatchId(match_id)
    .then(info => {
      return res.status(200).json(info);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});

app.get("/champion/:champ_name", (req, res) => {
  const { champ_name } = req.params;
  Promise.all([
    api.getChampionByName(champ_name),
    api.getChampionSkillsByName(champ_name)
  ])
    .then(info => {
      return res.status(200).json(info);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});
// port
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log("Server run in port " + PORT);
});
