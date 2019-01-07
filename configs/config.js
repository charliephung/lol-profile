const config = {
  API_KEY: "RGAPI-3fb86188-b27f-4822-a3c3-79c7586b47c4",
  header: {
    Origin: "https://developer.riotgames.com",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": this.API_KEY,
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
  },
  URL_HEAD: `https://euw1.api.riotgames.com/lol/`
};

module.exports = config;
