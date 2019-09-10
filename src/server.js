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
    const store = createStore(req);

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
