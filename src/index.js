import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import {createStore} from "redux";
import {rootReducer} from "./reducer/rootReducer";
import App from './App';

const store =createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>    ,
  document.getElementById('root')
);
