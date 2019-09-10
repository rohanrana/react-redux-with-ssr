import React from "react";
import App from "../App";

import Employees from "../containers/Employees";

// refactoring code for ssr
// export default () => {
//   return <div>
//     <Route exact path="/" component={Home} />
//     <Route path='/users' component={usersList}/>
//   </div>;
// };
export default [
  {
    ...App,
    routes: [
      // {
      //   ...Home,
      //   path: "/",
      //   exact: true
      // },
      {
        ...Employees,
        path: "/"
      }
    ]
  }
];
