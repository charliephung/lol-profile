import { combineReducers } from "redux";
import matchesList from "./matchesList";
import summonerInfo from "./summonerInfo";

export default combineReducers({
  matchesList,
  summonerInfo
});
