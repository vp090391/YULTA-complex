import React from 'react';
/*
import ReactDOM from 'react-dom';
*/
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

render(
  <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
              <App />
         </BrowserRouter>
      </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
