import React from "react";
import App from "../App";
import Employees from "../containers/Employees";

// This is a static route configuration. It should include all of your top level
// routes, regardless of whether they are going to server render. In fact, you
// can totally point multiple routes to the same component! This is great for
// when you only need to server render a handful of routes and not your entire
// application!
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
