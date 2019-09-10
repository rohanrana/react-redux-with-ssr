import React from "react";
import { renderRoutes } from "react-router-config";
// import 'semantic-ui-css/semantic.min.css'
import './App.css';
const App = ({ route }) => {
  return <div>
  {renderRoutes(route.routes)}
  </div>;
};

export default {
  component: App,
  // loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};
