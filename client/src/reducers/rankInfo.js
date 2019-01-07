import type from "constant";

const initData = [];

const reducer = (state = initData, actions) => {
  switch (actions.type) {
    case type.SET_RANK_INFO:
      return actions.rankInfo;
    default:
      return state;
  }
};

export default reducer;
