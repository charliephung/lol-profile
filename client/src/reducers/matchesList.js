import type from "constant";

const initData = [];

const reducer = (state = initData, actions) => {
  switch (actions.type) {
    case type.GET_MATCHES_LIST:
      return actions.matchesList;
    default:
      return state;
  }
};

export default reducer;
