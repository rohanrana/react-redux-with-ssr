import BrowserRouter from "react-router-dom/BrowserRouter";
import React from "react";
import routes from "./Routes";
import { renderRoutes } from "react-router-config";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import reducers from "./redux/Reducers";
import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";

const store = createStore(
  reducers,
  window.INTIAL_STATE,
  applyMiddleware(thunk)
);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
