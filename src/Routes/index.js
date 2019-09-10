import React from "react";
import App from "../App";

import Employees from "../containers/Employees";


export default [
  {
    ...App,
    routes: [
      {
        ...Employees,
        path: "/"
      }
    ]
  }
];
