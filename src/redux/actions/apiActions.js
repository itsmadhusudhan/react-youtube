//fetch data from url using ES6 fetch api
export const fetchSearch = (params) => {
  const api = "https://www.googleapis.com/youtube/v3/search/";
  console.log(params)
  return fetch(api,params).then(response => Promise.all([response, response.json()]));
};

export const fetchSearchRequest=()=>({
  type:"FETCH_SEARCH_REQUEST"
})

export const fetchSearchSuccess=(data)=>({
  type:"FETCH_SEARCH_SUCCESS",
  data
});

export const fetchSearchError=()=>({
  type:"FETCH_SEARCH_ERROR"
})

export const fetchSearchWithRedux = (params) => {
  return dispatch => {
    dispatch(fetchSearchRequest());
    return fetchSearch(params).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchSearchSuccess(json));
      } else {
        console.log(response)
        dispatch(fetchSearchError());
      }
    });
  };
};