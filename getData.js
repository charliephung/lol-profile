const axios = require("axios");
const fs = require("fs");

const { data } = require("./Utils/championData.json");
var promises = Object.keys(data).map(d =>
  axios
    .get(
      `http://ddragon.leagueoflegends.com/cdn/8.24.1/data/en_US/champion/${d}.json`
    )
    .then(r => {
      try {
        var info = r.data.data[d].spells;
        var formatted = info.map(i => ({
          id: i.id,
          name: i.name,
          description: i.description,
          cooldown: i.cooldown,
          costBurn: i.costBurn,
          range: i.range,
          image: i.image
        }));
        return { [d]: formatted };
      } catch (err) {
        return null;
      }
    })
    .catch(err => null)
);
