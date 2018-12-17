const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const api = require("./Utils/api");
const { get } = require("./Utils/utils");
var db = require("./Utils/file.json");

app.use(bodyParser.urlencoded({ extended: true }));

// home
/* 
{ id: 43031553,
  accountId: 201634788,
  name: 'Hiep',
  profileIconId: 577,
  revisionDate: 1544465162000,
  summonerLevel: 56 }

 */

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

/* 
[
 {
    "playerId": 90866809,
    "championId": 236,
    "championLevel": 7,
    "championPoints": 230798,
    "lastPlayTime": 1533044157000,
    "championPointsSinceLastLevel": 209198,
    "championPointsUntilNextLevel": 0,
    "chestGranted": true,
    "tokensEarned": 0,
    "champion": {
      "version": "8.24.1",
      "id": "Lucian",
      "key": "236",
      "name": "Lucian",
      "title": "the Purifier",
      "blurb": "Once a Sentinel of Light, Lucian is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. Consumed by the need to avenge his dead wife, he will not rest until Thresh, the specter who holds her...",
      "info": {
        "attack": 8,
        "defense": 5,
        "magic": 3,
        "difficulty": 6
      },
      "image": {
        "full": "http://ddragon.leagueoflegends.com/cdn/8.22.1/img/champion/Lucian.png",
        "sprite": "champion2.png",
        "group": "champion",
        "x": 192,
        "y": 0,
        "w": 48,
        "h": 48
      },
      "tags": [
        "Marksman"
      ],
      "partype": "Mana",
      "stats": {
        "hp": 571,
        "hpperlevel": 86,
        "mp": 348.88,
        "mpperlevel": 38,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 8.176,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 2.75,
        "attackspeedperlevel": 3.3,
        "attackspeed": 0.638
      }
    }
  }
}
 */
app.get("/mastery/:summoner_id", (req, res) => {
  const { summoner_id } = req.params;
  api
    .getSummonerMasteryById(summoner_id)
    .then(rs => {
      return rs.map(champ => ({
        ...champ,
        champion: get(db, champ.championId)
      }));
    })
    .then(addedChampionData => {
      return res.status(200).json(addedChampionData);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});

/* 
  "matches": [
    {
      "platformId": "EUW1",
      "gameId": 3863378338,
      "champion": 110,
      "queue": 430,
      "season": 11,
      "timestamp": 1544740019813,
      "role": "DUO_CARRY",
      "lane": "BOTTOM"
    }
  ]
*/
app.get("/match-lists/:account_id", (req, res) => {
  const { account_id } = req.params;
  api
    .getSummonerMatchListsByAccountId(account_id)
    .then(matches => {
      return matches.matches.map(match => ({
        ...match,
        champion: get(db, match.champion)
      }));
    })
    .then(addedChampionData => {
      return res.status(200).json(addedChampionData);
    })
    .catch(e => {
      return res.status(400).json(e);
    });
});
// port
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("Server run in port " + PORT);
});
