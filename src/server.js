
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

    // console.log("REQ STORE",req)
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      console.log("routes", route);

      return route.loadData ? route.loadData(store) : null;
    }).map(promise=>{
      if(promise)
      {
        return new Promise((resolve,reject)=>{
          promise.then(resolve).catch(resolve)
        })
      }
    });
    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);
      console.log("Context", context);
  
  
      if(context.url){
        res.redirect(301,context.url)
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    });
  

    //     console.log("Request",req)
    //     const context = {};

    //     const markup = renderToString(
    //       <Provider store={store}>
    //         <StaticRouter context={context} location={req.url}>
    //           <App />
    //         </StaticRouter>
    //       </Provider>
    //     );
    //     if (context.url) {
    //       res.redirect(context.url);
    //     } else {
    //       res.status(200).send(
    //         `<!doctype html>
    //     <html lang="">
    //     <head>
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //         <meta charset="utf-8" />
    //         <title>Welcome to Razzle</title>
    //         <meta name="viewport" content="width=device-width, initial-scale=1">
    //         ${
    //           assets.client.css
    //             ? `<link rel="stylesheet" href="${assets.client.css}">`
    //             : ""
    //         }
    //         ${
    //           process.env.NODE_ENV === "production"
    //             ? `<script src="${assets.client.js}" defer></script>`
    //             : `<script src="${assets.client.js}" defer crossorigin></script>`
    //         }
    //         <script>
    //         window.INTIAL_STATE =${serialize(store.getState())}
    //        </script>
    //     </head>
    //     <body>
    //         <div id="root">${markup}</div>
    //     </body>
    // </html>`
    //       );
    //     }
  });

export default server;
