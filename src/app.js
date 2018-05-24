import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import YTSearch from 'youtube-api-search';
import "./styles/style.scss";
import configStore from "./redux/store/configStore";
import Layout from "./components/Layout";
import { fetchSearchWithRedux } from "./redux/actions/apiActions";

const API_KEY="AIzaSyCWh6ACuUaP3iRMLH7j6TFWrXJ0tTTtIvM"

YTSearch({key:API_KEY,term:"reactjs"},(data)=>{
  console.log(data)
})


const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

var params = {
  part: 'snippet',
  key: API_KEY,
  q: 'reactjs',
  type: 'video'
};

// store.dispatch(fetchSearchWithRedux(params));


const app = (
  <Provider store={store}>
  <Layout/>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
