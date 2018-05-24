const searchReducerDefaultState = [];

const searchReducer = (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_REQUEST":
    return state;
    case "FETCH_SEARCH_SUCCESS":
      return [...state,...action.data]
    default:
      return state;
  }
};

export default searchReducer;
