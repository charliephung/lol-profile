import { combineReducers } from "redux";
import matchesList from "./matchesList";
import summonerInfo from "./summonerInfo";
import rankInfo from "./rankInfo";

export default combineReducers({
  matchesList,
  summonerInfo,
  rankInfo
});
