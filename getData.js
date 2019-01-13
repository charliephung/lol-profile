const fs = require("fs");

const { skills } = require("./Utils/ChampionSkils.json");
const { champ } = require("./Utils/ChampionData.json");
const res = skills.map(skill => ({}));
