import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./Routes";
import createStore from "./redux/store";
import renderer from "./renderer";
const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR)) 
  .get("*", (req, res) => {
    //server side configuring store
    const store = createStore(req);
    // itrating routes and get its component and
    // associated functions to set data at server side
    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
      })
      .map(promise => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
      });

    // making process parallel for each route to be hit.
    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    });
  });

export default server;
